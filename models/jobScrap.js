const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobScrapSchema = new Schema({
    jobname: [],
    companyname: [],
    city: []
});

module.exports = jobScrap = mongoose.model("job", JobScrapSchema);