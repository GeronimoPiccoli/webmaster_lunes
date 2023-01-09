var express = require('express');
var router = express.Router();
var novedadesModel = require('../modelos/novedadesModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

  var productos = await novedadesModel.getNovedades();

  res.render('productos', {
    isProductos: true,
    productos
  });
});

module.exports = router;
