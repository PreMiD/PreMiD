import mongoose, { Schema } from "mongoose";

export interface FeedbackSchema {
	input: string;
	type: FeedbackType;
	discord?: string;
	email?: string;
}

export type FeedbackType = "extension" | "feature" | "other";

const feedbackSchema = new Schema<FeedbackSchema>({
	discord: { type: String },
	email: { type: String },
	input: { required: true, type: String },
	type: { required: true, type: String },
});

export default mongoose.model("Feedback", feedbackSchema);
