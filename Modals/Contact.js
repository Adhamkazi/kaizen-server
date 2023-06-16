const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({
    firstName:{type: 'string',required: true},
    lastName:{type:'string',required: true},
    email:{type: 'String',required: true},
    phone:{type: 'number',required: true},
    company:{type: 'string',required: true},
    message:{type: 'String',required: true},
    date: {
      type: 'Date',
      default: () => new Date().toISOString().split('T')[0], 
    },
},{
versionKey: false,
});


const contactModal = mongoose.model("contact",contactSchema);


module.exports = {contactModal};