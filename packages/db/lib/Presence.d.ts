/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose/types/inferschematype.js" />
import mongoose from "mongoose";
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
    description: Record<string, string> & {
        en: string;
    };
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
declare const _default: mongoose.Model<PresenceSchema, {}, {}, {}, mongoose.Document<unknown, {}, PresenceSchema> & PresenceSchema & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<PresenceSchema, mongoose.Model<PresenceSchema, any, any, any, mongoose.Document<unknown, any, PresenceSchema> & PresenceSchema & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PresenceSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<PresenceSchema>> & mongoose.FlatRecord<PresenceSchema> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
//# sourceMappingURL=Presence.d.ts.map