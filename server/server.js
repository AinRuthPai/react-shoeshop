const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const mongoose = require("mongoose");

const server = async () => {
  await mongoose
    .connect("mongodb+srv://ovadoz:1234@ovadoz.owxis.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log(`MongoDB Connected`))
    .catch((error) => console.log(`MongoDB Connect Error : ${error}`));

  app.use("/api/users", require("./routes/users"));
  app.use("/api/items", require("./routes/items"));

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

server();
