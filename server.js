import express, { application } from 'express'
import mongoose from 'mongoose'
import Videos from './dbModel.js'
import Cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
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
    serverSelectionTimeoutMS: 5000, // Example: Increase server selection timeout
    socketTimeoutMS: 45000, // Example: Increase socket timeout
});

//API Endpoints
app.get("/", (req, res) =>
    res.status(200).send("Hello World!"))

// POST endpoint to create a new video
app.get('/v2/posts', async (req, res) => {
    try {
        console.log('Fetching videos from MongoDB...');
        const allVideos = await Videos.find();
        console.log('Fetched videos:', allVideos);
        res.status(200).json(allVideos);
    } catch (err) {
        console.error('Error fetching videos:', err);
        res.status(500).json({ message: "Failed to fetch videos", error: err.message });
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

//production script
// Serve static files from the React app
app.use(express.static('./short-video-frontend/build'));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'short-video-frontend', 'build', 'index.html'));
});



//Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))
