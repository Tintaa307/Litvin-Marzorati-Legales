"use server";
import nodemailer from 'nodemailer';

export async function sendEmail({email, name, subject, message}: {email: string, name?: string, subject?: string, message?: string}){
    const HOST = process.env.HOST;
    const EMAIL = process.env.EMAIL;
    const PASS = process.env.PASS;
    const EMAILTO = process.env.TOEMAIL;
    
    // Conection with nodemailer
    const mailTransporter = nodemailer.createTransport({
        host: HOST,
        port: 587,
        secure: false,
        service: "Gmail",
        auth: {
            user: EMAIL,
            pass: PASS,
        },
    });
    
    //Prepare the message
    let mailDetails = message ? {
        from: 'Contacto',
        to: EMAILTO,
        subject: subject ? `${subject} - ${name}` : `Solicitud de contacto - ${name}`,
        text: `${email}: ${message}`,
    } : {
        from: "Newsletter",
        to: EMAILTO,
        subject: `${email} se ha anotado a la Newsletter!`
    };
    
    //Send Email
    await new Promise((resolve, reject) => {
        mailTransporter.sendMail(mailDetails, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
                return { success: false , err };
            } else {
                console.log(info);
                resolve(info);
                return { success: true , info };
            }
        });
    });
}