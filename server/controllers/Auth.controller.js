const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const passport = require("passport");
const { validationResult } = require("express-validator");

const User = require("../models/user.model");
const mailchimp = require("../services/mailchimp.service");
const nodemailer = require("../services/nodemailer.service");
const { errorHandler } = require("../helpers/dbErrorHandling");
const keys = require("../configs/keys.config");
const { tokenLife, secret, active } = keys.jwt;

//register auth
exports.registerUser = async (req, res) => {
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const isSubscribed = req.body.isSubscribed;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map((error) => error.msg)[0];
    return res.status(422).json({
      error: firstError,
    });
  } else {
    User.findOne({ email }).exec((err, user) => {
      //if user exists
      if (user) {
        return res.status(400).json({
          error: "Email is Taken",
        });
      }
    });
    let subscribed = false;
    if (isSubscribed) {
      const result = await mailchimp.subscribeToNewsletter(email);

      if (result.status === "subscribed") {
        subscribed = true;
      }
    }
    //generate a token
    const token = jwt.sign(
      {
        firstName,
        lastName,
        email,
        password,
      },
      active,
      { expiresIn: `${tokenLife}` }
    );
    nodemailer.sendEmail(email, "signup", null, null, token).then(() => {
      res.redirect("/");
    });
  }
};

//active account and save in database
exports.activationController = (req, res) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, active, (err, decoded) => {
      if (err) {
        console.log("Activation error");
        return res.status(401).json({
          errors: "Expired link. Signup again",
        });
      } else {
        const { firstName, lastName, email, password } = jwt.decode(token);

        console.log(email);
        const user = new User({
          firstName,
          lastName,
          email,
          password,
        });
        user
          .save()
          .then((data) => {
            return res.status(200).json({
              success: true,
              data: data,
              message: "Signup success",
            });
          })
          .catch((err) => {
            if (err) {
              console.log("Save error", errorHandler(err));
              return res.status(401).json({
                error: errorHandler(err),
              });
            }
          });
      }
    });
  } else {
    return res.json({
      message: "error happening please try again",
    });
  }
};


//login user
exports.loginController = async( req,res,next)=>{
  
}

//forgot auth
//reset token auth
//reset auth
//google auth
//facebook auth
