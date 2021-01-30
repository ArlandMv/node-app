const express = require('express');
const dotenv = require('dotenv'); //env_var
const morgan = require('morgan'); //logs
const exphbs = require('express-handlebars'); //template engine


const connectDB = require('./config/db');
const { connection } = require('mongoose');

//Load config
dotenv.config({path: './config/config.env' });

//Handlebars
/*
app.engine('.hbs', exphbs({ 
    defaultLayout: 'main', extname: '.hbs'
}));
app.set('view engine', '.hbs');*/

connectDB();

const app = express();

if(process.ENV_ENV === 'development'){
    app.use(morgan('dev'))
}

app.get("/", (req, res) => res.send("Server is up and running"));

const PORT = (process.env.PORT || 5000 );

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


//npm run dev