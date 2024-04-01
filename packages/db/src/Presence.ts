import mongoose, { Schema } from "mongoose";

export interface PresenceSchema {
	name: string;
	url: string;
	githubUrl: string;
	folderName: string;
	presenceJs: string;
	iframeJs?: string;
	metadata: PresenceMetadata;
}

export interface PresenceMetadata {
	$schema: string;
	altnames?: string[];
	author: PresenceMetadataContributor;
	category: PresenceMetadataCategory;
	color: string;
	contributors?: PresenceMetadataContributor[];
	description: Record<string, string> & { en: string };
	iframe?: boolean;
	iFrameRegExp?: string;
	logo: string;
	readLogs?: boolean;
	regExp?: string;
	service: string;
	settings?: PresenceMetadataSetting[];
	tags: string[];
	thumbnail: string;
	url: string | string[];
	version: `${number}.${number}.${number}`;
}

export interface PresenceMetadataSetting {
	icon?: string;
	id: string;
	if?: Record<string, unknown>;
	multiLanguage?: boolean;
	placeholder?: string;
	title?: string;
	value?: string | number | boolean;
	values?: string[];
}

export interface PresenceMetadataContributor {
	id: string;
	name: string;
}

export type PresenceMetadataCategory = "other" | "games" | "videos" | "anime" | "music" | "socials";

const PresenceMetadataContributorSchema = new Schema<PresenceMetadataContributor>({
	id: { required: true, type: String },
	name: { required: true, type: String },
}),
	PresenceMetadataSettingSchema = new Schema<PresenceMetadataSetting>({
		icon: { type: String },
		id: { required: true, type: String },
		if: { type: Schema.Types.Mixed },
		multiLanguage: { type: Boolean },
		placeholder: { type: String },
		title: { type: String },
		value: Schema.Types.Mixed,
		values: { type: [String] },
	}),
	PresenceMetadataSchema = new Schema<PresenceMetadata>({
		$schema: { required: true, type: String },
		altnames: { type: [String] },
		author: { required: true, type: PresenceMetadataContributorSchema },
		category: { required: true, type: String },
		color: { required: true, type: String },
		contributors: { type: [PresenceMetadataContributorSchema] },
		description: { required: true, type: Schema.Types.Mixed },
		iFrameRegExp: { type: String },
		iframe: { type: Boolean },
		logo: { required: true, type: String },
		readLogs: { type: Boolean },
		regExp: { type: String },
		service: { required: true, type: String },
		settings: { type: [PresenceMetadataSettingSchema] },
		tags: { required: true, type: [String] },
		thumbnail: { required: true, type: String },
		url: { required: true, type: [String] },
		version: { required: true, type: String },
	}),
	presenceSchema = new Schema<PresenceSchema>({
		folderName: { required: true, type: String },
		githubUrl: { required: true, type: String },
		iframeJs: { type: String },
		metadata: { required: true, type: PresenceMetadataSchema },
		name: { required: true, type: String },
		presenceJs: { required: true, type: String },
		url: { required: true, type: String },
	});

export default mongoose.model("Presence", presenceSchema);
