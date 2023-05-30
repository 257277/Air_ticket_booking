const express = require("express");
const { UserModel } = require("../models/user_model");
require("dotenv").config();
const userRoute = express.Router();


userRoute.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body
    try {
        const user = await UserModel.find({ email });
        if (user.length == 0) {
            await UserModel.insertMany(req.body);
            res.status(201).send("Successfully registered");
        }
        else {
            res.status(400).send("Already register");
        }
    }
    catch (err) {
        res.status(400).send(err);

    }
})

userRoute.post("/api/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.find({ email });
        if (user.length == 0) {

            res.status(400).send("Enter Correct credentials");
        }
        else {
            if (user[0].password == password) {
                res.status(201).send("Successfully loggedIn");
            }
            else {
                res.status(400).send("Wrong Credentials");
            }
        }
    }
    catch (err) {
        res.status(400).send(err);

    }
})












module.exports = {
    userRoute
}