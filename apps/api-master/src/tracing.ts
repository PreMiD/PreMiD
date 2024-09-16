import { ValueType } from "@opentelemetry/api";
import { PrometheusExporter } from "@opentelemetry/exporter-prometheus";
import { MeterProvider } from "@opentelemetry/sdk-metrics";
import { ClearableGaugeMetric, updatePrometheusMetrics } from "./functions/clearableGaugeMetric.js";

const prometheusExporter = new PrometheusExporter();

const provider = new MeterProvider({
	readers: [prometheusExporter],
});

const meter = provider.getMeter("nice");

export const activeSessionsCounter = meter.createUpDownCounter("active_sessions", {
	description: "Number of active sessions",
	valueType: ValueType.INT,
});

export const activePresenceGauge = new ClearableGaugeMetric(
	"active_presences",
	"Per presence name+version, active number of users",
);

updatePrometheusMetrics(prometheusExporter);

prometheusExporter.startServer();
