import axios from 'axios';

const KEY = 'AIzaSyACL-IbPnCFkKvtszq3sE6PYzWZc4WTPck'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
