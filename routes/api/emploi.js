const express = require('express');
const router = express.Router();


const Emploi = require('../../models/Emploi');
const User = require('../../models/User');

router.post('/deleteEmploi', async (req, res) => {
    try {
        const event = await Emploi.findOneAndDelete(req.body);
        res.send(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/mine', async (req, res) => {
    try {
        const emploi = await Emploi.find(req.body);
        res.send(emploi);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/one', async (req, res) => {
    try {
        const emploi = await Emploi.findOne(req.body);
        res.send(emploi);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


router.post('/updateEmploi', async (req, res) => {
    try {
        const yess = await Emploi.updateOne({"_id": req.body.id}, req.body);
        res.send(yess);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/show', async (req, res) => {
    try {
        const emploi = await Emploi.find(req.body);
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
router.post('/favorisAdd', async (req, res) => {
    try {
        const yess = await Emploi.updateOne({"_id": req.body.id}, {$addToSet: {usersIntersted: req.body.user}});
        res.send(yess);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
router.post('/favorisRemove', async (req, res) => {
    try {
        const update = await Emploi.updateOne({"_id": req.body.id}, {$pull: {usersIntersted: req.body.user}});

        res.send(update);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/emploiIntersted', async (req, res) => {
    try {
        const interstedEmploi = await Emploi.findOne(req.body);
        const name = interstedEmploi.name;
        let responseSend = {"name": name};
        const interstedPersons = [];
        for (const user of interstedEmploi.usersIntersted) {
            const person = await User.findOne({"_id": user})
            interstedPersons.push(person);
        }
        responseSend.intersed = interstedPersons;

        res.send(responseSend);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


router.post('/candidatIntersted', async (req, res) => {
    try {
        const interstedEmploi = await Emploi.find(req.body);
        let response = [];
        for (let emploi of interstedEmploi) {
            numberIntersted = emploi.usersIntersted.length ? emploi.usersIntersted.length : 0;
            response.push({"_id": emploi._id, "title": emploi.name, "number": numberIntersted})
        }

        res.send(response);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
router.post('/acceptUser', async (req, res) => {
    try {
        const interstedEmploi = await Emploi.find(req.body);
        let response = [];
        for (let emploi of interstedEmploi) {
            numberIntersted = emploi.usersIntersted.length ? emploi.usersIntersted.length : 0;
            response.push({"_id": emploi._id, "title": emploi.name, "number": numberIntersted})
        }

        res.send(response);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


module.exports = router;