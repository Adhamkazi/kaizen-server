const express = require('express');

const {contactModal}= require("../Modals/Contact");

const contactRouter= express.Router();



contactRouter.get('/',async(req,res)=>{
   let query = req.query;
   try{
const user  = await contactModal.find(query);
res.send(user);
   }catch(err){
    res.send({ "msg": "unable to get the user data", "error": err.message })
   }
});


contactRouter.post("/contact-5",async(req,res)=>{
    try {
        const genralInfo = new contactModal(req.body);
        await genralInfo.save();
        res.send({"msg":"form has been saved successfully"});
    } catch (error) {
        res.send({ "msg": "unable to submit Form", "error": error.message })
    }
})


contactRouter.delete("/delete/:id", async (req, res) => {
   const id = req.params.id
   try {
       await contactModal.findByIdAndDelete({ "_id": id })
       res.send(`Deleted the food whose id is ${id}`);
   } catch (err) {
       console.log(err);
   }
})


module.exports = {contactRouter}