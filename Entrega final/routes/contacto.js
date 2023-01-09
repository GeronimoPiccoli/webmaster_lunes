var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('contacto', {
    isCONTACTO: true
  });
});

router.post('/', async (req, res, next) => {

  //console.log(req.body)

  var nombre = req.body.NOMBRE;
  var email = req.body.EMAIL;
  var telefono = req.body.TELEFONO;
  var mensaje = req.body.MENSAJE;

  var obj = {
    to: 'piccoligeronimo@gmail.com',
    subject: 'Contacto desde la Web',
    html: nombre + " se conecto a traves de la pagina y quiere mas info a este correo: " + email + ".<br> Ademas, hizo el siguiente comentario: " + mensaje + ".<br> su tel es: " + telefono
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })  //cierre transporter

var info = await transporter.sendMail(obj);

res.render('contacto', {
  isCONTACTO: true,
  message: 'Mensaje enviado correctamente'
});

})


module.exports = router;
