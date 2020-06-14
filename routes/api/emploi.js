const express = require('express');
const router = express.Router();


const Emploi = require('../../models/Emploi');
const User = require('../../models/User');
const Notification = require('../../models/Notification')

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
router.get('/show', async (req, res) => {
    try {
        const emploi = await Emploi.find(req.body);
        res.send(emploi);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

router.post('/showAll', async (req, res) => {
    try {
        const emploi = await Emploi.find();
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

        const emploi= await Emploi.findOne({"_id": req.body.id});
        const user=await User.findOne({"_id": emploi.user});
        console.log("emploi user",user);
        const notificationSave = new Notification({
            "title": "un utilisateur postulé",
            "message": "demande 2",
            "user": user._id,
            "url": "http://localhost:3000/EmploiPostule" + emploi._id,
            "noticed": false,
        });
        await notificationSave.save();


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

router.post('/postule', async (req, res) => {
    try {
        await Emploi.updateOne({"_id": req.body.id}, {$addToSet: {acceptUser: userAccepted}});

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
            console.log("user intersted",user)
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
        console.log("intersted", interstedEmploi)
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

router.post('/acceptUserEmploi', async (req, res) => {
    try {
        //const emploi = await Emploi.findOne(req.body);
        const userAccepted = await User.findOne({"_id": req.body.user});
        Date.now();
        const notificationSave = new Notification({
            "title": "Votre demande d'emploi a été accepter",
            "message": "demande 2",
            "user": userAccepted._id,
            "noticed": false,
        });
        await notificationSave.save();
        await Emploi.updateOne({"_id": req.body.id}, {$addToSet: {acceptUser: userAccepted}});


        res.send(notificationSave);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


module.exports = router;