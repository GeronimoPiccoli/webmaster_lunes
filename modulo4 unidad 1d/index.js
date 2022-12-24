const moment = require('moment')
moment.locale('es')
console.log('Naci ' + moment ('04/07/1996','DD/MM/YYYY').fromNow())
