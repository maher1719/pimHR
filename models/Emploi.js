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
    dateCreated: {
        type: date,
        default: Date.now()
    },
    dateEnd: {
        type: date,
        required: true
    },
    tags: [],
    keyword: [],
    address: {
        type: String,
        required: true
    },
    soceity: {
        type: String,
        required: true

    },
    userCreated: {
        type: String,
        required: true
    },
    usersIntersted: [{
        userId: String,
    }]


});
module.exports = Emploi = mongoose.model("emploi", EmploiSchema);