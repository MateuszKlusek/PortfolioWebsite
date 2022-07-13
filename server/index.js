// packages
import express from "express"
import cors from "cors"
import morgan from "morgan"
import nodemailer from "nodemailer"
import fs from "fs"
import dotenv from "dotenv"
import rateLimit from "express-rate-limit"

// importing .env
dotenv.config()

const app = express()


// variables
const PORT = process.env.PORT || 5003


// middleware
app.use(cors({
    origin: "*"
}))

// create a write stream (in append mode) for logs
const serverPath = process.cwd()
var accessLogStream = fs.createWriteStream(`${serverPath}/src/logs/access.log`, { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.urlencoded({ extended: true }))



// rage limites
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
    var transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: "contact@mateuszklusek.com",
            pass: process.env.PASS,
        },
    });

    // from and to need to be the same email
    var mailOptions = {
        from: 'contact@mateuszklusek.com',
        to: 'contact@mateuszklusek.com',
        subject: `Subject: ${subject}, from ${email}`,
        text: context
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return res.status(400).send({ msg: "OK" })
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).send({ msg: "Error" })
        }
    });
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT} for portfolio website.`)
})