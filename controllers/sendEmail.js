var nodemailer = require('nodemailer');
exports.emailSend = async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: req.body.email,
              pass: req.body.pass
            }
        });
        
        const to = ['primakurniawan0615@gmail.com', 'primacloud@gmail.com'];
        
        const mailOptions = {
            from: req.body.email,
            to: 'primakurniawan0615@gmail.com',
            subject: "tes1",
            text: 'tes'
        }
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });

        res.status(200).send({
            message: "ok"
        })
    } catch (error) {
        res.status(500).send(console.log(error))
    }

}
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
//}