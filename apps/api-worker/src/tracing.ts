import { ValueType } from "@opentelemetry/api";
import { PrometheusExporter } from "@opentelemetry/exporter-prometheus";
import { MeterProvider } from "@opentelemetry/sdk-metrics";

const prometheusExporter = new PrometheusExporter();

const provider = new MeterProvider({
	readers: [prometheusExporter],
});

const meter = provider.getMeter("nice");

export const counter = meter.createUpDownCounter("active_activites", {
	description: "Number of active activities",
	valueType: ValueType.INT,
});

prometheusExporter.startServer();
