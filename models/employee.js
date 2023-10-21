const conection = require("../connection")
const table_name = "usuario"
module.exports = {
    async insertar(nombre,nickname,correo,rol,departamento){
        const res = await conection.query(`INSERT INTO usuario ${table_name} (nombre, nickname, correo, rol, departamento) VALUES (${nombre},${nickname},${correo}, ${rol}, ${departamento})`);
        return res;
    },
    async obtenerTodosLosEmpleados(){
        const res = await conection.query(`SELECT * FROM ${table_name}`);
        return res;
    },
    async obtenerPorDepartamento(departamento){
        const res = await conection.query(`SELECT * FROM ${table_name} WHERE departamento = ${departamento}`);
        return res;
    },
    async obtenerEmpleado(id){
        const res = await conection.query(`SELECT * FROM ${table_name} WHERE id = ${id}`);
        return res;
    },
    async borrarEmpleado(id,){
        const res = await conection.query(`DELETE FROM ${table_name} WHERE id = ${id}`);
        return res;
    },
    async updateEmpleado(id,nombre,nickname,correo,rol,departamento){
        const res = await conection.query(`UPDATE ${table_name} set nombre = ${nombre},nickname = ${nickname},correo = ${correo},rol = ${rol},departamento = ${departamento} WHERE id = ${id}`);
        return res;
    },

}