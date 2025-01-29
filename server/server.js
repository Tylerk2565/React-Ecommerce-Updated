import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Acts as a bridge to connect our frontend and backend
// Since we have 2 different ports, this is how we connect those ports to fetch our data
// Cors helps us do that securely
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

// Creates connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  } else {
    console.log("Connected to the database");
  }
});

// Root route to check if the server is running
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Selects all from our inventory table in our sql database
// If it can't, then we return an error
app.get("/inventory", (req, res) => {
  const query = "SELECT * FROM inventory";
  connection.query(query, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch products" });
    } else {
      res.json(results);
    }
  });
});

const PORT = process.env.PORT || 3306;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
