const express = require('express');
const router = express.Router();


const jobScrap = require('../../models/jobScrap');
const jobsFilter = require('../../models/jobsFilter');


router.post('/', async (req, res) => {
    try {

        const jobs = await jobsFilter.find();
        res.send(jobs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
router.post("/search", async (req, res) => {
    try {
        const jobs = await jobScrap.find();
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
        const criteria = req.body;
        const jobsSearch = await jobsFilter.find(criteria);
        console.log(criteria);
        res.send(jobsSearch);
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});
module.exports = router;