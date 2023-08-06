const express = require("express");

const { register } = require("../../controllers/users/usersCtrl");
const { login } = require("../../controllers/users/usersCtrl");
const usersRouter = express.Router();
//! Route register
usersRouter.post("/api/v1/users/register", register);
//! Route login
usersRouter.post("/api/v1/users/login", login);
module.exports = usersRouter;
