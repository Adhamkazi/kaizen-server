const mongoose = require("mongoose");

const genralFormSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    companyName:{type:String, required:true},
    countryCode:{type:String, required:true},
    contactNumber:{type:Number, required:true},
    service:{type:String, required:true},
    message :{type:String,required:true},
    date: {
        type: 'Date',
        default: () => new Date().toISOString().split('T')[0], // Extracting only the date portion
      },
},{
    versionKey:false
})


const genralFormModal = mongoose.model("genralForm",genralFormSchema);

module.exports = {genralFormModal};