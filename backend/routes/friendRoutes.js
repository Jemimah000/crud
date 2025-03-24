const express = require("express");
const Friend = require("../model/friend");
const router = express.Router();

router.post("/",async(req,res)=>{
    try{
        const {name,age,location,image,quote,userId} = req.body;
        const newFriend = new Friend({name,age,location,image,quote,userId});
        await newFriend.save();
        res.status(201).json(newFriend);
    }
    catch(error){
        res.status(500).json({message:"error in creating friend",error});
    }
});

router.get("/",async(res,req)=>{
    
})

module.exports = router;