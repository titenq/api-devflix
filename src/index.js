require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');

const port = process.env.PORT || 3001;
const host = '0.0.0.0';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./app/controllers/index')(app);

app.listen(port, host, () => {
  console.log(`Server started on port: ${port}`);
});
