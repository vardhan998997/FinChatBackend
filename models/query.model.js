import mongoose, { Schema } from 'mongoose';
const schema = new Schema(
	{
		name: {
			type: String,
		},
		authorId: {
			type: String,
		},
		question: {
			type: String,
		},
		response: {
			type: String,
		},
		responded: {
			type: String,
		},
		responsedId: {
			type: String,
		},
		isReply: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true },
);
const model = mongoose.model('Query', schema);
export default model;
