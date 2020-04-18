const express = require('express');
const router = express.Router();


const Emploi = require('../../models/Emploi');

router.post('/mine', async (req, res) => {
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

module.exports = router;