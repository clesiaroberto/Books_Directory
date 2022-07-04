import knex from "../database";

export const checkCon = async(req, res) => {
    const check = await knex("users");
    console.log(check)
    res.end("hello world");
};