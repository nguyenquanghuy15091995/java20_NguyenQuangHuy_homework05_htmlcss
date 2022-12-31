import express from "express";
import { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "assets")));
app.set('views', path.join(__dirname, './views'))

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});