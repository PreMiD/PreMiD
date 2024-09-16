import type { ServerResponse } from "node:http";
import type { Attributes } from "@opentelemetry/api";
import { ValueType, diag } from "@opentelemetry/api";
import type { PrometheusExporter, PrometheusSerializer } from "@opentelemetry/exporter-prometheus";
import { AggregationTemporality, DataPointType, type GaugeMetricData, InstrumentType } from "@opentelemetry/sdk-metrics";

const registeredMetrics = new Map<string, ClearableGaugeMetric>();

//* Custom gauge metric class
export class ClearableGaugeMetric {
	private data: Map<string, { value: number; attributes: Attributes }>;
	private name: string;
	private description: string;

	constructor(name: string, description: string) {
		this.data = new Map();
		this.name = name;
		this.description = description;
		registeredMetrics.set(name, this);
	}

	set(key: string, value: number, attributes: Attributes) {
		this.data.set(key, { value, attributes });
	}

	clear({ except }: { except?: string[] }) {
		for (const key of this.data.keys()) {
			if (except && except.includes(key))
				continue;

			this.data.delete(key);
		}
	}

	toMetricData(): GaugeMetricData {
		return {
			descriptor: {
				name: this.name,
				description: this.description,
				unit: "",
				type: InstrumentType.GAUGE,
				valueType: ValueType.INT,
			},
			dataPointType: DataPointType.GAUGE,
			dataPoints: Array.from(this.data.values()).map(({ value, attributes }) => ({
				value,
				attributes,
				startTime: [0, 0],
				endTime: [0, 0],
			})),
			aggregationTemporality: AggregationTemporality.CUMULATIVE,
		};
	}

	get hasData() {
		return this.data.size > 0;
	}
}

export function updatePrometheusMetrics(prometheusExporter: PrometheusExporter) {
	// @ts-expect-error We are modifying a private method
	prometheusExporter._exportMetrics = function (this: PrometheusExporter, response: ServerResponse) {
		response.statusCode = 200;
		response.setHeader("content-type", "text/plain");
		this.collect().then(
			(collectionResult) => {
				const { resourceMetrics, errors } = collectionResult;
				if (errors.length) {
					diag.error(
						"PrometheusExporter: metrics collection errors",
						...errors,
					);
				}

				for (const metric of registeredMetrics.values()) {
					if (metric.hasData) {
						resourceMetrics.scopeMetrics[0]!.metrics.push(metric.toMetricData());
					}
				}

				response.end((this as unknown as { _serializer: PrometheusSerializer })._serializer.serialize(resourceMetrics));
			},
			(err) => {
				response.end(`# failed to export metrics: ${err}`);
			},
		);
	}.bind(prometheusExporter);
}
