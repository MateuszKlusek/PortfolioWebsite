import express from "express"
import cors from "cors"
import morgan from "morgan"
import nodemailer from "nodemailer"
import fs from "fs"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import rateLimit from "express-rate-limit"

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5003


// create a write stream (in append mode)
const serverPath = process.cwd()
var accessLogStream = fs.createWriteStream(`${serverPath}/src/logs/access.log`, { flags: 'a' })

// middleware

app.use(cors({
    origin: "*"
}))
app.use(morgan('combined', { stream: accessLogStream }))
app.use(bodyParser());

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
})
app.use(limiter)

// one route so far (just for emails)
app.post("/api/email", (req, res) => {
    const { email, subject, context } = req.body
    console.log(process.env.PASS)
    var transporter = nodemailer.createTransport({
        host: "serwer2292003.home.pl",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "contact@mateuszklusek.com",
            pass: process.env.PASS,
        },
    });

    var mailOptions = {
        from: 'contact@mateuszklusek.com',
        to: 'contact@mateuszklusek.com',
        subject: `Subject: ${subject}, from ${email}`,
        text: context
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.send(400)
        } else {
            console.log('Email sent: ' + info.response);
            res.send(200)
        }
    });
})


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT} for portfolio website.`)
})