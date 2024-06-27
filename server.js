import express, { application } from 'express'
import mongoose from 'mongoose'
import Videos from './dbModel.js'
import Cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

//App Config
const app = express()
const port = process.env.PORT || 9000
const connection_url = process.env.MONGODB_URI

//Middleware
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//API Endpoints
app.get("/", (req, res) =>
    res.status(200).send("Hello World!"))

// POST endpoint to create a new video
app.post('/v2/posts', async (req, res) => {
    try {
        const dbVideos = req.body;
        const createdVideo = await Videos.create(dbVideos);
        res.status(201).json(createdVideo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create video" });
    }
});

// GET endpoint to fetch all videos
app.get('/v2/posts', async (req, res) => {
    try {
        const allVideos = await Videos.find();
        res.status(200).json(allVideos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch videos" });
    }
});



//Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))