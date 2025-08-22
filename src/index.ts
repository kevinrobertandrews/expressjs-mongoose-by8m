import "./lib/db";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ message: "hello world!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
