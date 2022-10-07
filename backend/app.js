const mongoose = require('mongoose'); //Connexion MangoDB
const stuffRoutes = require('./routes/stuff'); //Lien vers routes->stuff.js
const userRoutes = require('./routes/user');
const express = require('express'); //Récupere le framework express
const path = require('path');

const app = express();//définit app

//Connexion BDD

mongoose.connect('mongodb+srv://admin:ENMNtPd7qpnMfZcP@nodejstrain1.zqthb5v.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> console.log('Connexion à MongoDB réussie !'))
  .catch(()=> console.log('Connexion à MongoDB échouée !'));


app.use(express.json());

//CORS SECURITY
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/stuff', stuffRoutes);
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;