const express = require('express');
const router = express.Router();


const Event  = require('../../models/Event');

router.post('/create/', async (req, res) =>{
    try {
         const event = new Event({
             id:req.body.user,
             title: req.body.title,
             allDay: req.body.allDay,
             start: req.body.start,
             end: req.body.end,
             user: req.body.user
         });

        await event.save();
        res.send(req.body);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
router.post('/', async (req, res) =>{
    try {
        const event = await Event.find({id: req.body.user});
        res.send(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/delete', async (req, res) => {
    try {
        const id = req.body._id;
        const event = await Event.findOneAndDelete({_id: id});
        res.send(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;