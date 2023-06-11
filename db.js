const mongoose = require('mongoose');
require('dotenv').config();

// const connection = mongoose.connect(process.env.mongoURL);
const connection =mongoose.connect(process.env.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

  mongoose.Promise = global.Promise;
module.exports = {connection};