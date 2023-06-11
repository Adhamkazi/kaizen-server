// require('dotenv').config();
const mongoose = require('mongoose');
// console.log(process.env.mongoURL);
const connection = mongoose.connect("mongodb+srv://adham:adham@cluster0.iq2zpvd.mongodb.net/kaizen?retryWrites=true&w=majority");
// const connection = mongoose.connect(process.env.mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   });

//   mongoose.Promise = global.Promise;
module.exports = {connection};