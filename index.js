import express from "express";
import { routers } from "./src/routers/routers.js";
import path from "path";
import "dotenv/config";

const app = express();
const port = 3001 || process.env.PORT;
let __dirname = path.resolve(path.dirname(""));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Im am running in port: ${port}`);
});
