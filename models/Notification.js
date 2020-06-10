const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

// Create Schema
const NotificationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    user: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    noticed: {
        type: Boolean,
        default: false,
        required: true,
    },
    otherUser: {
        type: String,
        required: false
    }


});
module.exports = Notification = mongoose.model("notification", NotificationSchema);