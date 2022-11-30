import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { User } from "./users";
const app: Express = express();
const user = new User();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.get("/users", user.getUser);
app.post("/users", user.getPost);

app.listen(8000, () => {
  console.log(`Env: dev => Server Listening on http://localhost:8000`);
});
