const express = require('express');
const router = express.Router();


const Notification = require('../../models/Notification')

router.post("/create", async (req, res) => {
    try {
        const notification = new Notification(req.body);
        await notification.save();
        res.send(notification)

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message)
    }
})

router.post("/getAll", async (req, res) => {
    try {
        const notification = await Notification.find(req.body);
        //const unreaded= await Notification.find(req.body,)
        res.send(notification)

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message)
    }
})

module.exports = router;