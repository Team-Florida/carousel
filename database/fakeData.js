const faker = require('faker');

let data = [];

    for(let i = 1; i <= 100; i++) {
      let obj = {
        property_id: i
      }

      let imageArray = [];
      for (let j = 0; j < Math.floor(Math.random() * 10); j++) {
        let imageObj = {
          path: faker.image.imageUrl(),
          description: faker.lorem.sentence()
        };
        imageArray.push(imageObj);
      }
      obj.property_images = imageArray.slice();
      data.push(obj);
    }


    // console.log(data);

    module.exports = data;