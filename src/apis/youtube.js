import axios from "axios"
const KEY = 'AIzaSyBiIdhvxNlYg_5tQsxIUyhjVtT3IjytWto'

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3/',
    params : {
        part : 'snippet',
        maxResults : 5,
        key: KEY,
        q : 'surfboards'
    }
})