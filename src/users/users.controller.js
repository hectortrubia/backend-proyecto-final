import { retrieveUserInfoByEmail, deleteUserInfoByEmail } from './users.model.js';

export const getUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await retrieveUserInfoByEmail(req.email);
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const DeleteUserInfo = async (req, res) => {
    // llamo al usuario
    try {
        const user = await deleteUserInfoByEmail(req.email);
        console.log(req.email)
        res.json(user); // deveulvo la info del usuario
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
