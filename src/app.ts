import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const list = [
  {
    name: "Computador",
    price: 5000.0,
  },
  {
    name: "Monitor",
    price: 1250.0,
  },
  {
    name: "Nootbook",
    price: 3000.0,
  },
];

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK!" });
});

app.get("/list", (req, res) => {
  res.status(201).json(list);
});

export { app };
