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

module.exports.fetchProperty = (propertyNo) => {  

  return new Promise( (resolve, reject) => {
    CarouseModel.find({property_id : propertyNo}, (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });

}



