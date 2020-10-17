const mongoose = require('../../database');

const VideosSchema = new mongoose.Schema({
  technology: [{
    type: String,
    require: true
  }],
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
},
{ collection: 'videos' });

const Videos = mongoose.model('Videos', VideosSchema);

module.exports = Videos;
