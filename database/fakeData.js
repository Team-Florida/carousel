const faker = require('faker');

const makeFakeData = () => {
  let data = [];

  for (let i = 1; i <= 100; i++) {
    let obj = {
      property_id: i
    };

    let imageArray = [];
    for (let j = 0; j < Math.floor((Math.random() * 15) + 7); j++) {
      let imageObj = {
        path: faker.image.imageUrl(),
        description: faker.lorem.sentence()
      };
      imageArray.push(imageObj);
    }
    obj.property_images = imageArray.slice();
    data.push(obj);
  }

  return (data);

};



module.exports = makeFakeData;