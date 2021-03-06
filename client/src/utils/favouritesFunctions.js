import axios from 'axios';

export const getFavourites = favouritesData => {
    return axios
        .get('/api/favourites', {
        })
        .then(response => {

            return response.data
        })
        .catch(err => {
            console.log(err);
        })
}

export const deleteFavourites = favouriteId => {
    return axios
        .delete(`/api/deleteFavourite/${favouriteId}`, {
        })
}