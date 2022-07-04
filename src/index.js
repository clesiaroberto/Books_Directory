import "dotenv/config";
import "babel-polyfill";
import express from "express";
import helmet from "helmet";
import router from "./routes/user";
import knex from "knex";

const app = express();

app.use(helmet());

//app.use(router);

const port = process.env.PORT || 3000;

app.get("/home", async(req, res) => {
    const check = await knex("users").select('*');
    console.log(check)
    res.end("Wellcome home again!");
    //res.json({users});
})

app.listen(port, () => console.log(`API is running on ${port}`));