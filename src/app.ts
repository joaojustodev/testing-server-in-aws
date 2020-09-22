import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const list = [
  {
    id: "1",
    name: "Computador",
    price: 5000.0,
  },
  {
    id: "2",
    name: "Monitor",
    price: 1250.0,
  },
  {
    id: "3",
    name: "Nootbook",
    price: 3000.0,
  },
  {
    id: "4",
    name: "Mouse gamer",
    price: 400.0,
  },
  {
    id: "5",
    name: "Teclado gamer",
    price: "390,00"
  }
];

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK!" });
});

app.get("/list", (req, res) => {
  res.status(201).json(list);
});

app.get("/list/:id", (req,res) => {
    const { id } = req.params;
    const item  = list.filter(item => item.id === id)
  
    res.status(200).json(item);
})

export { app };
