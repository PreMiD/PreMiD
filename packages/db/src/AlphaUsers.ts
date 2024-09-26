import mongoose, { Schema } from "mongoose";

export interface AlphaUsersSchema {
	userId: string;
}

const alphaUsersSchema = new Schema<AlphaUsersSchema>({
	userId: { required: true, type: String },
});

export default mongoose.model("AlphaUsers", alphaUsersSchema, "alphaUsers");
