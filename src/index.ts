import "dotenv/config";
import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Good to see you guys");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
