const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express()
const port = 3001;

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json({ limit:"25mb" }));
app.use(express.urlencoded({ extended: true }));

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send-email", (req, res) =>{
    const {email, subject, message} = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message,
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error){
            console.log(error);
            res.status(500).send({message:"An error occurred"});
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).send({message:"Email sent successfully"});
        }
    });
});

app.listen(port, () => {
    console.log(`Nodemailer is listening at http://localhost:${port}`);
})