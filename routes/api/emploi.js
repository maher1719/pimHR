const express = require('express');
const router = express.Router();


const Emploi = require('../../models/Emploi');

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
router.post('/update', async (req, res) => {
    try {

        //const event = await Event.find();
        //const event=await Event.deleteMany({user:"ba.maher94@gmail.com"});
        for (const row of req.body.rows) {
            const yess = await Emploi.updateOne({"_id": row.id}, row);
            console.log(yess);
        }


        //const event =  await Event.find();
        //console.log('Got body:', event,req.body.user);
        res.send(emploi);
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