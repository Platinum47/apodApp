const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const fetch = require("node-fetch");

const APIKEY = "UlqFPsb7PaDOHkro32uIwkjq9OVZogifJ7SVAPkL";

router.get("/fetch_image", async (req, res) => {
    console.log("/fetch_image endpoint called");
    const url = `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`;
    const options = {   
        "method": "GET",
    }

    
    const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e => {
        console.error({
            "message": "no",
            error: e,
        });
    });

    console.log("RESPONSE ", response);
    res.json(response.url);


});




 router.use('/', homeRoutes);
 router.use('/api', apiRoutes);

 module.exports = router;
