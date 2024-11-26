import axios from 'axios';

const omdb = axios.create({
    baseURL: "http://www.omdbapi.com/",
    timeout: 15000,
    params: {
        apikey: "a996e9db"
    }
})
export { omdb };
