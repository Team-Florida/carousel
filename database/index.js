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

const CarouseModel = mongoose.model('carouselDoc', carouseSchema);

// const sample = [
//   {
//   property_id: 252,
//   property_images: [{
//     path: 'http://somewhere',
//     description: 'This room is nice'
//   }]
//   },
//   {
//     property_id: 253,
//     property_images: [{
//       path: 'http://dont know where',
//       description: 'This room is big'
//   }
// ]
// }];


// Initial Dummy Data
// const data = require('./fakeData.js');
// CarouseModel.insertMany(data);

