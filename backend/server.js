const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("frontend"));

// let aTech = [
//   { id: 1, name: "Danish" },
//   { id: 2, name: "Sharique5" }
// ];

// app.get("/technicians", (req, res) => {
//   res.json(aTech);
// });

app.get("/technicians", (req, res) => {
  db.all("SELECT * FROM technicians", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get("/technicians/:id", (req, res) => {
  const id = parseInt(req.params.id);

  db.get("SELECT * FROM technicians WHERE id = ?", [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!row) {
      return res.status(404).json({ message: "Technician not found" });
    }

    res.json(row);
  });
});

// app.get("/technicians/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   const techFound = aTech.find(item => item.id === id);

//   if (!techFound) {
//     return res.status(404).json({ message: "Technician not found" });
//   }

//   res.json(techFound);
// });

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
