import express from 'express';

import { updateRank } from '../controllers/rankController.js';

import verifyAuth from '../middlewares/verifyAuth.js';

const router = express.Router();

// rank Routes

router.post('/topic', verifyAuth, updateRank);

export default router;