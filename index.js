//create a simple express server
const express = require('express');
const app = express();
const path = require('path');
const logger = require('./middleware/logger');

//init middleware
//app.use(logger);
//BodyParser middleware
app.use(express.json());                        //handle raw json
app.use(express.urlencoded({extended:false}));  //handle formas  

//set static folder
//point to the folder that is going to be used as static folder
app.use(express.static(path.join(__dirname, 'public')));

//Products API Routes
app.use('/api/products', require('./routes/api/products'));

//to run th web server -> need to listen on a port
const PORT = process.env.port || 5000; 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

