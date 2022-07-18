import "dotenv/config";
import "babel-polyfill";
import { app } from "./app";
const port = process.env.PORT || 3000;

let obj = { n: "cles" };


app.listen(port, () => console.log(`API is running ${port}`));