const paypal = require("paypal-rest-sdk");
require("dotenv").config();

paypal.configure({
   mode: process.env.PAYABLE_MODE,
   client_id: process.env.PAYABLE_CLIENT_ID,
   client_secret: process.env.PAYABLE_CLIENT_SECRENT,
});

module.exports = paypal;
