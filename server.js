// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`the server is running properly on localhost: ${port}`);
  };






// GET route
app.get('/getWeather', getWeather);

function getWeather (request, response) {
  response.send(projectData);
};



// POST addWeather
app.post('/addWeather', addWeather);



function addWeather(req,res){

    newWeather = {
        temperature : req.body.temperature,
        date : req.body.date,
        userResponse : req.body.userResponse
    }

    projectData = newWeather;
    res.send(projectData);
    console.log(projectData);
};



