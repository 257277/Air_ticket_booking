const express = require("express") ;
require("dotenv").config();
const { connection } = require("./config/db");
const { userRoute } = require("./config/routes/userRoute")
const { flightRoute } = require("./config/routes/flightRoute");
const { bookingRoute } = require("./config/routes/bookingRoute")
const app = express();
app.use(express.json());

app.use("/user", userRoute);
app.use("/flight", flightRoute);
app.use("/booking", bookingRoute);


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("successfully connected to database");
    }
    catch (err) {
        console.log(err);
    }
    console.log(`Server is running on port ${process.env.port}`);
})
