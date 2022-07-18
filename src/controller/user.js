import bcrypt from "bcryptjs";
import knex from "../database";
import { responseHandler } from "../utils/responseHandler";

const table = "users";

export const register = async(req, res) => {

    const data = inputData(req);

    if (await knex(table).where({ email: data.email }).first()) {
        const message = "This user already existis!";
        return responseHandler(res, res, 409, [], message);
    };

    try {

        const [createdUser] = await knex(table).insert(data);
        const message = "User was successfully registered";
        return responseHandler(req, res, 200, { id: createdUser }, message);

    } catch (error) {
        return responseHandler(req, res, 500, error);
    }

};

const inputData = (req) => {
    const {
        name,
        surname,
        user_name,
        email,
        city,
        country,
        pass_word
    } = req.body;

    return {
        name,
        surname,
        user_name,
        email,
        city,
        country,
        pass_word: pass_word ? bcrypt.hashSync(pass_word, 10) : ""
    }
};