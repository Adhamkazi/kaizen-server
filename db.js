const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.mongoURL)

const connection = mongoose.connect(process.env.mongoURL);
// const connection =  mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   });

//   mongoose.Promise = global.Promise;
module.exports = {connection};