
    const nodemailer = require('nodemailer')
    // create transporter object with smtp server details
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'casillascespedescesardaniel@gmail.com',
            pass: 'qsre yxqi cwyz fjnv'
        }
    });
    
    // send email
    transporter.sendMail({
        from: 'michael.konopelski@ethereal.email',
        to: 'cesarcasillascespedes@gmail.com',
        subject: 'Test Email Subject',
        html: '<h1>Example HTML Message Body</h1>'
    });