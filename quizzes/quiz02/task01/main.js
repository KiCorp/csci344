// 1. Create your getBusinesses function here:

async function getBusinesses(location, search_term, num_results) {
    // var express = require('express')
    // var cors = require('cors')
    // var app = express()
    // app.use(cors())
    // app.options('*', cors())


    var API_KEY = '_oZpQ9sg__8dH1VHM3oPVGd5G9IGzBFi_cMGCO0hE1JHzYVCOa1zg4qVAIGE-qhZcIdPFLlUd9QH-mDCUukRC5yJPs2mCGfM7uA_ZlHOCzM8hOeuZbmUjieJu7hcZ3Yx';

    const response = await fetch(`https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${search_term}&limit=${num_results}`, {
           method: 'GET',
           headers: new Headers({
             //'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             'Authorization': `Bearer + ${API_KEY}`,
             'Content-Type': 'application/json', //
             //'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Authorization'
            //  'Access-Control-Allow-Origin': '*',
            //  'Access-Control-Allow-Credentials': 'true',
            //  'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
            //  'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
           })
           
    });
    //response = requests.get(`https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${search_term}&limit=${num_results}`);
    //mode: 'no-cors'
    const data = await response.json();
    //console.log(data);
}






// 2. When you're done, uncomment the test code below and preview index.html in your browser:

///*
console.log(
    "Should display 3 pizza restaurants in Asheville:",
    getBusinesses("Asheville, NC", "pizza", 3)
);
console.log(
    "Should display 10 thai restaurants in San Francisco:",
    getBusinesses("San Francisco, CS", "thai", 10)
);
//*/
