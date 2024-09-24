import mongoose, { Schema } from "mongoose";

export interface BetaUsersSchema {
	userId: string;
}

const betaUsersSchema = new Schema<BetaUsersSchema>({
	userId: { required: true, type: String },
});

export default mongoose.model("BetaUsers", betaUsersSchema, "betaUsers");
