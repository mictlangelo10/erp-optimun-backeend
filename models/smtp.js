const nodemailer = require('nodemailer')
const config = require('../data/config.json')

module.exports = {
    async sendMail(por, para,tema, mensaje){
        const transporter = nodemailer.createTransport(config);
        const res = await transporter.sendMail({
            from: this.por,
            to: this.para,
            subject: this.tema,
            html: this.html
        });
        return res;
    },
    async prueba(){
        const transporter = nodemailer.createTransport(config);
        transporter.sendMail({
            from: 'michael.konopelski@ethereal.email',
            to: 'cesarcasillascespedes@gmail.com',
            subject: 'Test Email Subject',
            html: '<h1>Example HTML Message Body</h1>'
        });
    }
};