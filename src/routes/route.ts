import express from 'express';
const router = express.Router();
import {createUser,findAllUsers,updateUserById,deleteUserById} from '../controllers/userController'


router.post('/user',createUser)
router.get('/allUsers',findAllUsers);
router.put('/user',updateUserById);
router.delete('/user',deleteUserById);

module.exports = router