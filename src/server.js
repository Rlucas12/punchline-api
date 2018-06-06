const dotenv = require('dotenv').config()
const Sequelize = require('sequelize')
const express = require('express')
const sequelize = new Sequelize(process.env.DB_HOST)
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(3000, () => console.log('App listening on port 3000!'))