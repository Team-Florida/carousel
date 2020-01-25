const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const clientPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientPath));

// For testing only
app.get('/hello', (req, res) => {
  res.send('Hello from server');
});

app.listen(PORT, () => console.log(`Server listening to PORT: ${PORT}`));


