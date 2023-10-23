const {Router} = require('express');
const router = Router(); 
const {getAllEmpleados} = require('../controllers/queryes')

router.get('/empleados', getAllEmpleados)

module.exports = router