const dotenv = require('dotenv').config()
const Sequelize = require('sequelize')
const express = require('express')

const app = express()
const sequelize = new Sequelize(process.env.DB_HOST)

// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/artists', artistRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(3000)

module.exports = app;