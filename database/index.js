const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/carouseldb', {useNewUrlParser: true, useUnifiedTopology: true});

const database = mongoose.connection;

database.on('error', () => console.log(`Error connecting to MongoDb: ${error}`));

database.once('open', () => console.log(`Success in connecting to MongoDb`));

const carouseSchema = new mongoose.Schema({
  property_id: Number,
  property_images: [{
    path: String,
    description: String
  }]
})

CarouseModel = mongoose.model('carouselDoc', carouseSchema);

// module.exports = database;

module.exports = CarouseModel;




