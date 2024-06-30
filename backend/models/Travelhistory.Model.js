const mongoose = require("mongoose");

const travelHistorySchema = new mongoose.Schema({
    passenger: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    flightDetails: {
        flightNumber: { type: String, required: true },
        airline: { type: String, required: true },
        departureAirport: { type: String, required: true },
        arrivalAirport: { type: String, required: true },
        departureDate: { type: Date, required: true },
        arrivalDate: { type: Date, required: true }
    },
    bookingDetails: {
        bookingReference: { type: String, required: true, unique: true },
        bookingDate: { type: Date, default: Date.now }
    },
    travelStatus: {
        type: String,
        enum: ["Booked", "CheckedIn", "Cancelled", "Completed"],
        default: "Booked"
    },
    paymentDetails: {
        amount: { type: Number, required: true },
        currency: { type: String, required: true },
        paymentMethod: { type: String, required: true },
        paymentDate: { type: Date, default: Date.now }
    }
});

const TravelHistory = mongoose.model("TravelHistory", travelHistorySchema);

module.exports = TravelHistory;
