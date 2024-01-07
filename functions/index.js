const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("Insert The Stripe Secret Key")
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Received", total);
    const paymentIntent = await stripe.paymentIntents.create(
        { amount: total, currency: "usd" });
    response.status(201).send(
        { clientSecret: paymentIntent.client_secret });
});
exports.api = onRequest(app);
