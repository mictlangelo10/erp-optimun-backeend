
    const nodemailer = require('nodemailer')
    const config = require('./data/config.json')
    // create transporter object with smtp server details
    const transporter = nodemailer.createTransport(config);
    
    // send email
    transporter.sendMail({
        from: 'michael.konopelski@ethereal.email',
        to: 'cesarcasillascespedes@gmail.com',
        subject: 'Test Email Subject',
        html: '<h1>Example HTML Message Body</h1>'
    });