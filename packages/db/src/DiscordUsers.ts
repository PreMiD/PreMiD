import mongoose, { Schema } from "mongoose";

export interface DiscordUsersSchema {
	userId: string;
	username: string;
	avatar: string;
	discriminator: string;
	created: number;
}

const discordUsersSchema = new Schema<DiscordUsersSchema>({
	userId: { required: true, type: String },
});

export default mongoose.model("DiscordUsers", discordUsersSchema, "discordUsers");
