//create a simple express server
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const products = require('./Products')

const app = express();

//init middleware
//app.use(logger);

//Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));     //emtplate engine set to handlebars; default layout = file with the name "main"
app.set('view engine', 'handlebars');                          //set voiew engine   

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//homepage route
app.get('/', (req, res) => res.render('index', {
    title: "Shopping Assist",
    products
}));

//set static folder
//point to the folder that is going to be used as static folder
app.use(express.static(path.join(__dirname, 'public')));

//Products API Routes
app.use('/api/products', require('./routes/api/products'));

//to run th web server -> need to listen on a port
const PORT = process.env.port || 5000; 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

