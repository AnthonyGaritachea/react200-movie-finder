require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movieInfo/:userInput', (req, res) => {
    axios({
      url: `http://omdbapi.com/?s=${req.params.userInput}&apikey=${process.env.OMDB_API_KEY}`, // http://www.omdbapi.com/?t=Spiderman b24f7130
      method: 'get'
    })
    .then((response) => {
      res.send(response.data);
    });
  });

  // app.get('/movieInfo', (req, res) => {
  //   axios({
  //     url: `http://omdbapi.com/?t=Batman&apikey=${process.env.OMDB_API_KEY}`, // http://www.omdbapi.com/?t=Spiderman b24f7130
  //     method: 'get'
  //   })
  //   .then((response) => {
  //     res.send(response.data);
  //   });
  // });

// app.get('/movie/:id', (req, res) => {
//     axios({
//         url: `http://omdbapi.com/?i=${req.params.id}&apikey=${process.env.OMDB_API_KEY}`,
//         method: 'get'
//     })
//     .then((response) => {
//         res.send(response.data);
//     });
// });

module.exports = app;

