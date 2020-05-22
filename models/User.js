const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  phone: {
    type: Number,
  },
  occupation: {
    type: String
  },
  address: {
    type: String,
  },
  role: {
    type: String,
  },

  skills: [],

  softSkills: [],
  education: [{

    institute: String,

    yearBegan: Date,

    yearFinished: Date,

    current: Boolean,

    diploma: String,

  }],

  Stages: [{

    title: String,

    yearBegin: Date,

    yearFinished: Date,

    society: String,

  }],

  Projects: [{

    title: String,

    Description: String,

    url: String,

  }]


});

module.exports = User = mongoose.model("users", UserSchema);
