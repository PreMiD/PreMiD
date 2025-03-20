import mongoose, { Schema } from "mongoose";

export interface CreditsSchema {
	userId: string;
	avatar: string;
	name: string;
	premium_since: number;
	role: string;
	roleColor: string;
	roleId: string;
	roleIds: string[];
	rolePosition: number;
	roles: string[];
	status: string;
	tag: string;
	flags: string[];
}

const creditsSchema = new Schema<CreditsSchema>({
	userId: { required: true, type: String },
	avatar: { required: true, type: String },
	name: { required: true, type: String },
	premium_since: { required: true, type: Number },
	role: { required: true, type: String },
	roleColor: { required: true, type: String },
	roleId: { required: true, type: String },
	roleIds: { required: true, type: [String] },
	rolePosition: { required: true, type: Number },
	roles: { required: true, type: [String] },
	status: { required: true, type: String },
	tag: { required: true, type: String },
	flags: { required: true, type: [String] },
});

export default mongoose.model("Credits", creditsSchema, "credits");
