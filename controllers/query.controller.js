import queryModel from '../models/query.model.js';
import { User } from '../models/user.model.js';
const createQuery = async (req, res, next) => {
	try {
		const authorId = req.user.userId;
		const user = await User.findById(authorId);

		const name = user?.name;
		const question = req.body.question;
		const query = await queryModel.create({
			name,
			authorId,
			question,
		});
		res.status(200).json({ query });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const responseToQuery = async (req, res, next) => {
	try {
		const { queryId } = req.params;
		const { response, responded, responsedId } = req.body;
		const query = await queryModel.findById(queryId);
		const author = await User.findById(query.authorId);
		const newQuery = await queryModel.create({
			name: author.name,
			authorId: query.authorId,
			question: query.question,
			response,
			responded,
			responsedId,
		});
		res.status(201).json(newQuery);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const getAllQueries = async (req, res, next) => {
	try {
		const queries = await queryModel.find();
		if (queries.length == 0) {
			return res.status(200).json({ message: 'No Qeuries' });
		}
		res.status(200).json({ queries });
	} catch (error) {
		res.status(500).json(error.message);
	}
};
export { createQuery, getAllQueries, responseToQuery };
