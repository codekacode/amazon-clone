const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LHWLhIWYHUGjfA0V3N5rYxFIDmo4KjixMocLhtvIChNL8qY42OLuUenElVCStQSTVu5xAaUkpelz8JRn9c3yq7O00enMbzTIF');

// api

// app config

const app = express();

// middlewares

app.use(cors());
app.use(express.json());

// apiroutes

app.get("/", (req, res) => res.status(200).send("Hello world!"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// listen command

exports.app = functions.https.onRequest(app);

// exaple endpoint
// http://127.0.0.1:5001/clone-24cfc/us-central1/api