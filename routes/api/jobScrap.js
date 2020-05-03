const express = require('express');
const router = express.Router();


const jobScrap = require('../../models/jobScrap');
const jobsFilter = require('../../models/jobsFilter');


router.post('/', async (req, res) => {
    try {

        //console.log("requeqt "+req.body.allDay);
        const jobs = await jobScrap.find();
        //await jobsFilter.deleteMany();
        jobs.forEach((element) => {
            //console.log(jobs.length);
            let cities = element.city[0].toString().trim();
            const citiesArray = cities.split(",");


            const city = citiesArray[0].toString().trim();

            const province = citiesArray[1] ? citiesArray[1].toString().trim() : undefined;
            const country = citiesArray[2] ? citiesArray[2].toString().trim() : undefined;


            const jobFiltred = new jobsFilter({
                jobname: element.jobname[0].toString().trim(),
                companyname: element.companyname[0].toString().trim(),
                city: city,
                province: province || "",
                country: country || "",

            });
            //console.log(jobFiltred);

            jobFiltred.save();
            element.delete();
        });
        //console.log(jobs.length);
        //const userId= req.params.id;


        //const user =  User.findById(req.user.id);
        //const { title } = req.body;
        //const event =  Event.find();
        res.send(x);
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