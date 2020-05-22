const express = require('express');
const router = express.Router();


const Emploi = require('../../models/Emploi');

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


module.exports = router;