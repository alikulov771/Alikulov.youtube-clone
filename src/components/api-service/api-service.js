import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'x-rapidapi-key': 'f8cafd2ef3msh9893cb304450ee1p1e29b0jsn2768e58e101f',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};
export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return response.data;
    },
};













