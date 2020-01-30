// Schema --- for reference only
// const carouseSchema = new mongoose.Schema({
//   property_id: Number,
//   property_images: [{
//     path: String,
//     description: String
//   }]
// })


let imagesArray = [];


for(let i = 1; i <= 51; i++) {
  imagesArray.push(`https://hrcarousel.s3-us-west-1.amazonaws.com/bnb-images/${i}.jpg`);
}

let descriptionArray = [
  'Oceanside fire pit',
  'Oceanfront 6 Person Spa',
  'Luxurious bedding and high end tempurpedic mattresses',
  'Spectacular Oceanfront Home Views..',
  'View from the house!',
  'Spectacular Oceanfront Home Views..',
  'Great room...views...',
  'Snuggle up and enjoy the crashing wave views from everywhere...',
  'Outdoor dining and barbecue ....just above the waves',
  'Oceanfront field....soccer game, meditation....fabulous!',
  'Den - Great for the kids',
  'Master bath....',
  'Modern Kitchen...with a view!',
  'LES 2 BR Penthouse New Construction',
  'Midtown Manhattan Penthouse',
  '40th Floor NYC Views!! Luxury 3 bedrooms on UES.',
  'Light filled living room with 22 foot ceiling',
  'Chefs kitchen w every imaginable appliance',
  'Flos fixtures and hand painted fabrics from Draga Obradovic',
  'formal dinning',
  'Library overhanging the living room',
  'Unique and eclectic collection of books curated by the Strand Bookstore',
  'overlooking the gorgeous hot tub and garden',
  'Top Level Terrace with Rose wall -- perfect for entertaining and picnics',
  'Dining room terrace -- great for breakfast most of the year!',
  'Gorgeous top floor media / sun room overlooking terrace and hot tub',
  '5th floor media/sun room with wet bar and opening onto a 400 square foot garden swimming in sun',
  'Master Bedroom',
  'Master Bath and Jacuzzi w steam shower and hand poured glass tiles',
  'Guest Room 1',
  'Architecturally Stunning Former Synagogue!'
];

let myData = [];



for(let i = 1; i <= 100; i++) {
  let eachProperty = {};

  eachProperty.property_id = i;
  
  let propImageArray = [];

  for(let j = 0; j < 15; j++) {
    let tempObj = {
      path: imagesArray[Math.floor(Math.random() * (imagesArray.length))],
      description: descriptionArray[Math.floor(Math.random() * (descriptionArray.length))]
    };
    propImageArray.push(tempObj);
  }
  eachProperty.property_images = propImageArray.slice();
  
  myData.push(eachProperty);
}


module.exports = myData;