const express = require("express");
const app = express();
const cors = require("cors");
const { connectToDB } = require("./db/db.connect");
const authV1 = require("./routes/user.router");
const todosV1 = require("./routes/todo.router");

app.use(express.json());
app.use(cors());

const port = 3000;

connectToDB();

// v1
app.use("/v1", authV1);
app.use("/v1", todosV1);

app.listen(process.env.PORT || port, () => {
  console.log(`Pomotodoro REST API listening on port ${port}`);
});
