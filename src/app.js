import express from "express";
import helmet from "helmet";
import router from "./routes/routes";



const app = express();

app.use(helmet());
app.use(express.json());
app.use(router);



app.get("/home", async(req, res) => {

    res.end("Wellcome home!");
});

export { app };