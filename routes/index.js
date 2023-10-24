const {Router} = require('express');
const router = Router(); 
const {getAllEmpleados, getEmpleado, deletEmpleado, putEmpleado} = require('../controllers/queryes')

router.get('/empleados', getAllEmpleados)
router.get('/empleado/:id?',getEmpleado)
router.delete('/delete/:id?',deletEmpleado)
router.put('/insert',putEmpleado)

module.exports = router