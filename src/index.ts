import "./lib/db";
import express from "express";
import cors from "cors"

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors({
  origin: process.env.WEB_APP_ORIGIN
}))

app.get("/", async (req, res) => {
  res.json({ message: "hello world!" });
});

app.get("/heath", async (req, res) => {
  res.json({ message: "Okay!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
