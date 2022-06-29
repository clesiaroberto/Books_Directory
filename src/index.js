import express from "express";
import helmet from "helmet";

const app = express();
app.use(helmet());

const port = process.env.PORT || 3000;

app.get("/home", (req, res) => {
    res.end("Wellcome home again!")
})

app.listen(port, () => console.log(`API is running on ${port}`));