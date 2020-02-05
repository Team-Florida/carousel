const CarouseModel = require('./index.js');
// const makeFakeData = require('./fakeData.js');




// Initial Dummy Data
// CarouseModel.insertMany(makeFakeData())
//   .then(response => console.log(`${response.length} records inserted`))
//   .catch(error => console.log(error));


// MyData 
const myData = require('./myData.js');

module.exports.dummyData = () => {

  CarouseModel.remove({})
    .then(() => CarouseModel.insertMany(myData))
    .then(response => console.log(`${response.length} records inserted`))
    .catch(error => console.log(error));
};
