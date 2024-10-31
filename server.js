//console.log("Test");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5001;
//console.log(process.env.TEST);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`Hello API Verfied Worked ${process.env.TEST}`);
});

app.listen(PORT, () => {
  console.log(`Server is running  http://localhost:${PORT}`);
});
