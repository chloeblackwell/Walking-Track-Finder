import axios from 'axios';


export const getTracks = trackData => {
    return axios
        .get('/api/tracks', {
        })
        .then(response => {

            return response.data
        })
        .catch(err => {
            console.log(err);
        })
}

export const addTrack = trackData => {
    return axios
        .post("/api/add", { trackData })
        .then(response => {
            alert("Added to favourites");
            return response.data
        })
        .catch(err => {
            alert("User must log in");
        })
}

// Get one track 