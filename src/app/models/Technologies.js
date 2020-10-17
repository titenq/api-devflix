const mongoose = require('../../database');

const TechnologiesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  videos: [{
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }]
},
{ collection: 'technologies' });

const Technologies = mongoose.model('Technologies', TechnologiesSchema);

module.exports = Technologies;
