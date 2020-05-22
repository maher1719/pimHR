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
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true
    },
    noticed: {
        type: Boolean,
        required: true,
    },
    otherUser: {
        type: String,
        required: false
    }


});
module.exports = Notification = mongoose.model("notification", NotificationSchema);