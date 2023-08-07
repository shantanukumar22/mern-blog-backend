const express = require("express");

const { register } = require("../../controllers/users/usersCtrl");
const { login } = require("../../controllers/users/usersCtrl");
const { getProfile } = require("../../controllers/users/usersCtrl");
const isLogin = require("../../middlewares/isLogin");
const usersRouter = express.Router();
//! Route register
usersRouter.post("/register", register);
//! Route login
usersRouter.post("/login", login);
//!profile
usersRouter.get("/profile/", isLogin, getProfile);
module.exports = usersRouter;
