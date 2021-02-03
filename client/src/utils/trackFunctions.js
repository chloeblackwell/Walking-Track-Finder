import axios from 'axios';


export const getTracks = trackData => {
    return axios
        .get('http://localhost:8080/api/tracks', {
        })
        .then(response => {

            return response.data
        })
        .catch(err => {
            console.log(err);
        })
}

// Get one track 