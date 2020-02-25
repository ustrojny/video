import axios from 'axios';

//const KEY = 'AIzaSyChNx_9wMpfxrQ2s-lS0rpAH-rED-Dlm7c';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
    //params: {
    //    part: "snippet",
    //    maxResults: 5,
    //    key: KEY
    //}
});