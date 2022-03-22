
import express from 'express';
import { getUserInfo } from './users.controller.js';
import { DeleteUserInfo } from './users.controller.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)
    .delete(DeleteUserInfo)


export default router;