const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

mongoose.set('strictQuery', false);

const fruitSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please check your data entry no name specified!"]
    },
    score: {
    type: Number,
    min: [1],
    max:[10]
    },
    review: String, 
    
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({ 
  name: "Kamote",
  score: 5,
  review: 'taste goods!'
 });


  // fruit.updateOne({_id: "63d7b3857d6cf0845467b65c"}, {name: "Grapes"},function(err){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     console.log("SUCCESS UPDATE");
  //   }
  // });
  // const replacement = { name: 'pineapple'};

  // Fruit.findOneAndReplace({ _id: "63d7b3857d6cf0845467b65c" }, replacement, (error) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Success replacement");
  //   }
  // });

  Fruit.deleteOne({name: "Apple"},function(err){
    if(err){
      console.log(err);
    }else{
      console.log("Success Deleted");
    }
  });







  
const kiwi = new Fruit({
  name: 'Kiwi',
  score: 5,
  review: 'Taste good'
});
const banana = new Fruit({
  name: "Banana",
  score: 7,
  review: "Taste bad"
});
const orange = new Fruit({
  name: "Orange",
  score: 10,
  review: "Goods"
});

// Fruit.insertMany([fruit, kiwi, banana, orange], function (err) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success save to FruitDB");
//   }
// });


Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    
    fruits.forEach(element => {
      console.log(element.name , element.score);
 });
 db.close();
  }
});

// const personSchema = new mongoose.Schema({
//   name: String,
//   Age: Number,
// });
// const Person = mongoose.model("Person", personSchema);
// const personlog = new Person({
//   name: "Alexiess",
//   Age: 22
// });
// personlog.save();