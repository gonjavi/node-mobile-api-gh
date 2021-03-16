require('./config/config');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));  //parse application/x-www-form-urlenconded
app.use(express.json()); // parse application/json

app.use(require('./routes/mobile.js'));

mongoose.connect(process.env.URLDB, 
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, 
  (err, res) => {
  if (err) throw err;
    console.log('Database online'); 
});

app.listen(process.env.PORT, () => console.log("Escuchando puerto", process.env.PORT));
