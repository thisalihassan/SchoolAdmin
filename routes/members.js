const express = require("express");
const router = express.Router();
const cors = require('cors');
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');
const generator = require('generate-password');
const { check, validationResult } = require('express-validator');

const Member = require('../models/Member')

router.use(cors())

// @route   POST api/members/addMember
// @desc    Add New Member / User
// @access  public
router.post("/addMember", 
    [
        check('firstname', 'First name is required')
            .not()
            .isEmpty(),

        check('lastname', 'Last name is required')
            .not()
            .isEmpty(),

        check('username', 'User name is required')
            .not()
            .isEmpty(),

        check('email', 'Email is required')
            .isEmail()
            .exists()
            .trim()
            .normalizeEmail(),

        check('gender', 'Gender is required')
            .not()
            .isEmpty(),
        auth
    ],
         async (req, res) => {
            //  console.log(req)
        
            const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        var { firstname, lastname, username, email, dob, gender, password } = req.body;

        try {
            //check if user exists
            let member = await Member.findOne({ email })

            if (member) {
                return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }

            //random password generation
            password = generator.generate({
                length: 8,
                numbers: true,
                uppercase: true
            });

            member = new Member({
                firstname, lastname, username, email, dob, gender, password
            })
            console.log( member)

            //Encrypy password
            const salt = await bcrypt.genSalt(10);
            member.password = await bcrypt.hash(password, salt);

            await member
                .save()
                .then(member => {
                    return res.status(200).json({ message: 'User added successfully.' })

                }).catch(err => console.log(err));

            // var gmailAuth = {
            //     type: "oauth2",
            //     user: "buzilightyear@gmail.com",
            //     clientId:
            //         "836527539897-kq0bmenlq2di41hl4jqu9hvsbc2ivrep.apps.googleusercontent.com",
            //     clientSecret: "yBhlDxp9uPUR9fhA9pfnSsvB",
            //     refreshToken:
            //         "1//04uXNYt2b4UJ5CgYIARAAGAQSNwF-L9IrXL0om-bzMbXvMW8McoVay1XnnTm3WZZQBVCuk7EWkyqzczbHrvCwxqVaxn8DuTQRZOw",
            // };

            // const transporter = nodemailer.createTransport({
            //     service: "gmail",
            //     auth: gmailAuth,
            // });
            // const mailOptions = {
            //     from: "MOOC <buzilightyear@gmail.com>",
            //     subject: 'Verify Registration', // Subject line
            //     html: '<h1><b>School</b></h1><br /><br />' +
            //         '<h3> Hi' + username + '</h3 >' +
            //         '<p>Thanks for signing up!</p>' +
            //         '<p>Your account has been created, you can login after you have activated your account by using the credentials below.</p>' +
            //         '<p>Email: ' + email + '</p>' +
            //         '<p />Password: ' + password + '</p>' +
            //         '<p>Click on url to access the platform.' + '</p>' +
            //         '<a href=" http://localhost:3000/"> http://localhost:3000/ </a>' +
            //         '<br /><br />' +
            //         '<p>Regards: <b>School</b></p>'// plain text body
            // };

            // transporter.sendMail(mailOptions, function (err, info) {
            //     if (err)
            //         console.log(err)
            //     else
            //         console.log(info);
            // })

           


        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server Error')
        }
    }
)

module.exports = router;