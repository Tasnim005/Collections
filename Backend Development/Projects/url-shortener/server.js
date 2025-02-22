import express from 'express';
import mongoose, { connect } from "mongoose";
import ShortUrl from "./models/shortUrl.js";

const mongooseURI = 'mongodb://localhost:27017/urlShortener';

// Connect to MongoDB
connect(mongooseURI);
const app = express();

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()

    res.render('E:/Codes/Backend Development/Projects/url-shortener/views/index', { shortUrls: shortUrls })
});

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({
        full: req.body.fullUrl
    })

    res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })

    if (shortUrl == null) return res.sendStatus(404)
    shortUrl.clicks++
    shortUrl.save()

    res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000);
