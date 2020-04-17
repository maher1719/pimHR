const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');
const { validationResult } = require('express-validator');


const User = require('../../models/User');
const Event  = require('../../models/Event');

router.post('/create/', async (req, res) =>{
    try {
        const title="mm";
        const date1= Date.now();
        const allday=true;
        //console.log("requeqt "+req.body.allDay);
        //const user = await User.findById(req.user.id);
        //const userId= req.params.id;
         const event = new Event({
             id:req.body.user,
             title: req.body.title,
             allDay: req.body.allDay,
             start: req.body.start,
             end: req.body.end,
             user: req.body.user
         });

        await event.save();
        console.log("created",event);
        //const user =  User.findById(req.user.id);
        //const { title } = req.body;
        //const event =  Event.find();
        res.send(req.body);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
router.post('/', async (req, res) =>{
    try {

        //const event = await Event.find();
        //const event=await Event.deleteMany({user:"ba.maher94@gmail.com"});
        const event = await Event.find({id: req.body.user});
        //const user =  User.findById(req.user.id);
        //const { title } = req.body;

        //const event =  await Event.find();
        console.log('Got body:', event,req.body.user);
        res.send(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/delete', async (req, res) => {
    try {

        //const event = await Event.find();
        //Event.deleteMany();
        const id = req.body._id;

        const event = await Event.findOneAndDelete({_id: id});
        console.log(req.body._id);
        //const user =  User.findById(req.user.id);
        //const { title } = req.body;

        //const event =  await Event.find();
        res.send(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;