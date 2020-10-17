require("dotenv").config({ path: ".env" });
module.exports = {
  urls: {
    name: "MERN_ONE",
    apiURL: `${process.env.BASE_API_URL}`,
    serverURL: process.env.BASE_SERVER_URL,
    clientURL: process.env.BASE_CLIENT_URL,
  },
  nodeENV : process.env.NODE_ENV,
  port: process.env.PORT || 5000,
  database: {
    url: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    tokenLife: "7d",
    active:process.env.JWT_ACCOUNT_ACTIVATION
  },
  mailchimp: {
    key: process.env.MAILCHIMP_KEY,
    listKey: process.env.MAILCHIMP_LIST_KEY,
  },
  nodemailers: {
    key: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    sender: process.env.NODEMAILER_EMAIL_SENDER,
    host:process.env.NODEMAILER_HOST,
    user:process.env.NODEMAILER_USER,
    passwords:process.env.NODEMAILER_PASSWORD,
    port:process.env.NODEMAILER_PORT
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  },
};
