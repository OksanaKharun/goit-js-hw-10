
const url = 'https://api.thecatapi.com/v1/breeds';
const api_key = 'live_VHDVVux3SVijcjZSSBm7129BnTI6xq99uZEub9u0AbdAfLmgA18YpfMgo3WkUaVv';

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${api_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });      
};
export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }); 
};