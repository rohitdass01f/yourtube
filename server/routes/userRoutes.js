import express from 'express';
import {login } from '../controllers/auth.js';
import { updateprofile } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);
router.patch('/update/:id', updateprofile);

export default router;