const { Router} = require("express");
const router = Router();
const apiRoute = '/api';
const pesoController= require('../controllers/peso_controller')

//cliente
router.post(apiRoute+'/pacientes',pesoController.create)


module.exports = router;