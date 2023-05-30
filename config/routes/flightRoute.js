const express = require("express");
const { FlightModel } = require("../models/flight_model");
require("dotenv").config();
const flightRoute = express.Router();

flightRoute.get("/api/flights", async (req, res) => {
    // let date = Date();
    // let datearr = date.split(" ");
    // let time = datearr[4];

    try {
        let allflight = await FlightModel.find();
        res.status(200).send(allflight);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

flightRoute.get("/api/flights/:id", async (req, res) => {
    let id = req.params.id
    try {
        let flight = await FlightModel.find({ "_id": id });
        res.status(200).send(flight);
    }
    catch (err) {
        res.status(400).send(err);
    }
})
flightRoute.post("/api/flights", async (req, res) => {
    // let { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;
    try {
        let flight = await FlightModel.insertMany(req.body);
        res.status(201).send("Flight Added successfully");
    }
    catch (err) {
        res.status(400).send(err);
    }
})

flightRoute.patch("/api/flights/:id", async (req, res) => {
    // let { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;
    let id = req.params.id
    try {
        let flight = await FlightModel.findByIdAndUpdate({ "_id": id }, req.body);
        res.status(204).send("Flight detail is updated successfully");
    }
    catch (err) {
        res.status(400).send(err);
    }
})

flightRoute.delete("/api/flights/:id", async (req, res) => {
    // let { airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price } = req.body;
    let id = req.params.id;
    try {
        let flight = await FlightModel.findByIdAndDelete({ "_id": id });
        res.status(202).send("Flight is deleted successfully");
    }
    catch (err) {
        res.status(400).send(err);
    }
})



module.exports = {
    flightRoute
}