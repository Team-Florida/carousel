const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const model = require('../model/index.js');

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

app.get('/properties',  (req, res) => {
  model.fetchAllProperties( (err, response) => {
    res.status(200).send(response)
  })
});

app.get('/property:id',  (req, res) => {
  let propertyId = req.params.id;
  propertyId = propertyId.slice(1); // reoove starting :
  model.fetchProperty(propertyId, (err, response) => {
    if(err) {
      console.log(err);
    } else {
      res.status(200).send(response);
    }
    
  })
})


app.listen(PORT, () => console.log(`Server listening to PORT: ${PORT}`));


