require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
