const express = require("express");
const { BookingModel } = require("../models/booking_model");
const { FlightModel } = require("../models/flight_model");
const { UserModel } = require("../models/user_model");
require("dotenv").config();
const bookingRoute = express.Router();


bookingRoute.post("/api/booking", async (req, res) => {
    try {
        await BookingModel.insertMany(req.body);
        res.status(201).send("flight is booked successfully");
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

bookingRoute.get("/api/booking", async (req, res) => {
    try {
        let allbooking = await BookingModel.find();
        let arr = [];
        for (let i = 0; i < allbooking.length; i++) {
            let user = allbooking[i].user;
            let flight = allbooking[i].flight;
            let u = await UserModel.find({ "_id": user });
            let f = await FlightModel.find({ "_id": flight });
            let d = [u, f];
            arr.push(d);
        }
        res.status(200).send(arr);
    }
    catch (err) {
        res.status(400).send(err);
    }
})





module.exports = {
    bookingRoute
}