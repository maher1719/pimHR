const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmploiSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },

    society: {
        type: String,
        required: true

    },

    user: {
        type: String,
        required: true
    },

    dateCreated: {
        type: Date,
        default: Date.now()
    },

    dateEnd: {
        type: Date,
        required: false
    },

    tags: [],

    keyword: [],



    usersIntersted: [{
        userId: String,
    }]


});
module.exports = Emploi = mongoose.model("emploi", EmploiSchema);