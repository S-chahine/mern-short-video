import axios from 'axios'
const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://short-video-app.azurewebsites.net/v2/posts',
})

export default instance