const CarouseModel = require('../database/index.js');


module.exports.fetchAllProperties = (callback) => {  

  CarouseModel.find({}, (error, data) => {
    if(error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });

}

module.exports.fetchProperty = (propertyNo, callback) => {  

  CarouseModel.find({property_id : propertyNo}, (error, data) => {
    if(error) {
      callback(error, null);
    } else {
      callback(null, data);
    }
  });

}



