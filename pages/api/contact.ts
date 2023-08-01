"use strict";
const nodemailer = require("nodemailer");

export default async function ContactAPI(req:any,res:any){
const {name,email,message} = req.body

const user = process.env.NODEMAILER_EMAIL;
const secondUser =process.env.NODEMAILER_EMAIL_SECOND;
const data={
    name,email,message
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
})

try{
    const mail = await transporter.sendMail({
        from: user,
        to: secondUser ,
        replyTo: email,
        subject: `Wiadomość z formularza kontaktowego ${name}`,
        html:`
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        `
    });
console.log("Message sent:", mail.messageId);

    return res.status(200).json({message: "success"});
}catch(error){
    console.log(error)
    res.status(500).json({message: "Could not send the email Your message was not sent",
});
}

}