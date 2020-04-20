const express = require('express');
const router = express.Router();


const jobScrap = require('../../models/jobScrap');


router.post('/', async (req, res) => {
    try {

        //console.log("requeqt "+req.body.allDay);
        const jobs = await jobScrap.find();
        jobs.forEach((element) => {

        });
        //const userId= req.params.id;


        //const user =  User.findById(req.user.id);
        //const { title } = req.body;
        //const event =  Event.find();
        res.send(jobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
router.post("/search", async (req, res) => {
    try {
        const criteria = req.body;
        const jobs = await jobScrap.find({criteria});
        console.log(criteria);
        res.send(jobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
module.exports = router;