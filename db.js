const mongoose = require('mongoose');
const connection = mongoose.connect(process.env.MONGODB_URL);
require('dotenv').config();
module.exports = {connection};