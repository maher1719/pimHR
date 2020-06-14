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
        //await Notification.deleteMany();
        if(req.body.user!=undefined) {
            const notification = await Notification.find(req.body).sort({dateCreated: -1});
            const criteria = req.body;
            console.log("criteria", req.body)
            criteria.noticed = false;
            console.log(criteria)
            const unreadedReq = await Notification.find(criteria)
            console.log(unreadedReq);
            const unreaded = unreadedReq.length ? unreadedReq.length : 0
            const reponse = {notification, unreaded}
            res.send(reponse);
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message)
    }
})

router.get("/getAll", async (req, res) => {
    try {
        console.log(req.query)
        //await Notification.deleteMany();

            const notification = await Notification.find(req.query).sort({dateCreated: -1});
            //console.log(notification)
            res.send(notification);


    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message)
    }
})

router.post("/updateReaded", async (req, res) => {
    try {
        //const notification = await Notification.find(req.body);
        const unreadedReq = await Notification.find(req.body, {noticed: false})
        if (unreadedReq.length > 0)
            for (const unreadedReqKey of unreadedReq) {

                await Notification.updateMany(unreadedReqKey, {noticed: true})
            }


        res.send(await Notification.find(req.body));

    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message)
    }
})

module.exports = router;