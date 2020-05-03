const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobScrapSchema = new Schema({
    jobname: String,
    companyname: String,
    city: String,
    province: String,
    country: String
});

module.exports = jobsFiltred = mongoose.model("jobsFilter", JobScrapSchema);