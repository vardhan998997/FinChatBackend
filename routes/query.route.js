import { Router } from 'express';
import {
	getAllQueries,
	createQuery,
	responseToQuery,
} from '../controllers/query.controller.js';
import { authUser } from '../middleware/auth.js';
const router = Router();
router.route('/createQuery').post(authUser, createQuery);
router.route('/getAllQueries').get(authUser, getAllQueries);
router.route('/reponseToQuery/:queryId').post(authUser, responseToQuery);
export default router;
