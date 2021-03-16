const express =require('express');
let app = express();
let Mobile = require('../models/mobile');

app.get('/mobiles', (req, res) => {
  Mobile.find({})
    .exec((err, mobiles) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }
      
      res.json({
        ok: true,
        mobiles
      });
    });
});

app.get('/mobile/:id', (req, res) => {
  let id = req.params.id;
  Mobile.findById(id)
    .exec((err, mobileDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        });
      }

      if (!mobileDB) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'El id no existe'
          }
        });
      }

      res.json({
        ok: true,
        mobile: mobileDB
      });
    });    
});

app.post('/mobiles', (req, res) => {
  let body = req.body;

  let mobile = new Mobile({
    brand: body.brand,
    model: body.model,
    camara: body.camara,
    memoria: body.memoria,
    price: body.price
  });

  mobile.save((err, mobileDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!mobileDB) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      mobile: mobileDB
    });
  });
});

app.put('/mobile/:id', (req, res) => {
  let id = req.params.id;
  let body = req.body;

  let updateProduct = {
    brand: body.brand,
    model: body.model,
    camara: body.camara,
    memoria: body.memoria,
    price: body.price
  };

  Mobile.findByIdAndUpdate(id, updateProduct, {new: true, runValidators: true,  useFindAndModify: false }, (err, mobileDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if (!mobileDB) {
      return res.status(400).json({
        ok: false,
        err
      });
    }

    res.json({
      ok: true,
      mobile: mobileDB
    });
  });
});

app.delete('/mobile/:id', (req, res) => {
  let id = req.params.id;

  Mobile.findByIdAndDelete(id, (err, req) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      });
    }

    if(!id) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'The mobile does not exit'
        }
      });
    }

    res.json({
      ok: true,
      message: 'Mobile deleted'
    });
  });
});

module.exports = app;