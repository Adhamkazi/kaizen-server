const express = require('express');

const {genralFormModal}= require("../Modals/GenralForm");

const genralFormRouter= express.Router();



genralFormRouter.get('/',async(req,res)=>{
   let query = req.query;
   try{
const user  = await genralFormModal.find(query);
res.send(user);
   }catch(err){
    res.send({ "msg": "unable to get the user data", "error": err.message })
   }
});


genralFormRouter.post("/genral-5",async(req,res)=>{

    try {
        const genralInfo = new genralFormModal(req.body);
        await genralInfo.save();
        res.send({"msg":"form has been saved successfully"});
    } catch (error) {
        res.send({ "msg": "unable to submit Form", "error": error.message })
    }
})


genralFormRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    try {
        await genralFormModal.findByIdAndDelete({ "_id": id })
        res.send(`Deleted the food whose id is ${id}`);
    } catch (err) {
        console.log(err);
    }
 })
 


module.exports = {genralFormRouter}