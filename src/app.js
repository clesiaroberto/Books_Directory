import express from "express";
import helmet from "helmet";
import router from "./routes/user";
import knex from "./database/index";


const app = express();

app.use(helmet());

//app.use(router);


app.get("/home", async(req, res) => {

    const check = await knex("users").select("*");
    console.log(check)
    res.end("Wellcome!");
    //res.json(JSON.stringify(check));
});

export { app };