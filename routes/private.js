const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/',(req,res) => res.send('Hola Mundo').end())


module.exports = router;