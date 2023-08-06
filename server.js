const http = require("http");
const express = require("express");
const usersRouter = require("./routes/users/usersRouter");
const connectDB = require("./config/database");
//!server
const app = express();

// connecting to the mongo db
connectDB();

//middlewares
app.use(express.json()); // pass incoming data

//Routes
app.use("/", usersRouter);

const server = http.createServer(app);
const PORT = process.env.PORT || 9081;
server.listen(PORT, console.log(`server running on port ${PORT}`));
