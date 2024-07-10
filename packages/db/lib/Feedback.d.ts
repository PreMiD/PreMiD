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
export interface FeedbackSchema {
    input: string;
    type: FeedbackType;
    discord?: string;
    email?: string;
}
export type FeedbackType = "extension" | "feature" | "other";
declare const _default: mongoose.Model<FeedbackSchema, {}, {}, {}, mongoose.Document<unknown, {}, FeedbackSchema> & FeedbackSchema & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<FeedbackSchema, mongoose.Model<FeedbackSchema, any, any, any, mongoose.Document<unknown, any, FeedbackSchema> & FeedbackSchema & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, FeedbackSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<FeedbackSchema>> & mongoose.FlatRecord<FeedbackSchema> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default _default;
//# sourceMappingURL=Feedback.d.ts.map