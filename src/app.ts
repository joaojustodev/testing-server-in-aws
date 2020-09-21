import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK!" });
});

app.get("/:name", (req, res) => {
  const name = req.params;

  res.status(201).json({ messaje: `Hellow ${name}` });
});

export { app };
