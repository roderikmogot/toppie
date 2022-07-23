const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = 3030;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("Hola, backend!");
});

app.post("/add_order", async (req, res) => {
  let newOrder = req.body["newOrder"];

  let newOrderJSON = JSON.stringify(newOrder);
  fs.writeFile("./orders.json", newOrderJSON, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
});

// Listen to port
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
