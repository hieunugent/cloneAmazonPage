const functions = require('firebase-functions');
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { response } = require('express');
const stripe = require("stripe")(
  process.env.TEST_KEY
);
//API 
// app config 
const app = express()
//middleware
app.use(cors({origin:true}));
app.use(express.json());
//API ROOT
app.get('/', (req, res)=> res.status(200).send('hello world'))

app.post('/payments/create', async(req, res) => {
    const total = req.query.total;
    console.log('Payment Request recieve BOOM!!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total, // subunit 
        currency:"usd",
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
//- listen command
exports.api = functions.https.onRequest(app)

//