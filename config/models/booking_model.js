const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

const bookingSchema = mongoose.Schema(
    {
        "user": { type: Types.ObjectId, ref: 'user' },
        "flight": { type: Types.ObjectId, ref: 'flight' }
    }
)
const BookingModel = mongoose.model("Booking", bookingSchema);

module.exports = {
    BookingModel
}