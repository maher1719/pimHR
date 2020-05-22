const express = require('express');
const router = express.Router();


const Emploi = require('../../models/Emploi');

router.post('/deleteEmploi', async (req, res) => {
    try {

        //const event = await Event.find();
        //const event=await Event.deleteMany({user:"ba.maher94@gmail.com"});
        console.log("min", req.body);
        const event = await Emploi.findOneAndDelete(req.body);


        //const event =  await Event.find();
        //console.log('Got body:', event,req.body.user);
        res.send(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/mine', async (req, res) => {
    try {

        //const event = await Event.find();
        //const event=await Event.deleteMany({user:"ba.maher94@gmail.com"});
        console.log("min", req.body);
        const emploi = await Emploi.find(req.body);


        //const event =  await Event.find();
        //console.log('Got body:', event,req.body.user);
        res.send(emploi);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/one', async (req, res) => {
    try {

        //const event = await Event.find();
        //const event=await Event.deleteMany({user:"ba.maher94@gmail.com"});
        console.log("min", req.body);
        const emploi = await Emploi.findOne(req.body);


        //const event =  await Event.find();
        //console.log('Got body:', event,req.body.user);
        res.send(emploi);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


router.post('/updateEmploi', async (req, res) => {
    try {

        //const event = await Event.find();
        //const event=await Event.deleteMany({user:"ba.maher94@gmail.com"});

        const yess = await Emploi.updateOne({"_id": req.body.id}, req.body);
        console.log(yess);


        //const event =  await Event.find();
        //console.log('Got body:', event,req.body.user);
        res.send(yess);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/show', async (req, res) => {
    try {
        //const event = await Event.find();
        //const event=await Event.deleteMany({user:"ba.maher94@gmail.com"});
        const emploi = await Emploi.find(req.body);
        //const user =  User.findById(req.user.id);
        //const { title } = req.body;

        //const event =  await Event.find();
        //console.log('Got body:', event,req.body.user);
        res.send(emploi);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/create', async (req, res) => {
    try {
        const emploi = new Emploi(req.body);
        console.log(req.body);
        await emploi.save();
        res.send(emploi);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


module.exports = router;