const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const profilsScema = new Schema({

    NomProfil: {
        type: String,
    },

    jobProfil: {
        type: String,
    },

    adresseProfil: {
        type: String,
    },

    ItemURL: {
        type: String,
    },

    details: {}

});

module.exports = profils = mongoose.model("profils", profilsScema);
