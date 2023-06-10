const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({
    firstName:{type: 'string',required: true},
    lastName:{type:'string',required: true},
    email:{type: 'String',required: true},
    phone:{type: 'number',required: true},
    company:{type: 'string',required: true},
    message:{type: 'String',required: true},
    date: { type: 'string' },
},{
versionKey: false,
});

contactSchema.pre('save', function (next) {
    if (!this.date) {
      const currentDate = new Date().toLocaleString(undefined, {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      });
      this.date = currentDate;
    }
    next();
  });
  
const contactModal = mongoose.model("contact",contactSchema);


module.exports = {contactModal};