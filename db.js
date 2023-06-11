require('dotenv').config();
const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.mongoURL);
// const connection = mongoose.connect(process.env.mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   });

//   mongoose.Promise = global.Promise;
module.exports = {connection};