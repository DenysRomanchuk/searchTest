import * as axios from 'axios'
export const BASE_URL = 'https://swapi.dev/api';

export const fetchSearchResults = async (query) => {
    try {
        if (query && query.length > 1) {
            const parsedQuery = query.replaceAll(' ', '+');
            const url = `${BASE_URL}/people/?search=${parsedQuery}`;
            const {
                data: {
                    results
                }
            } = await axios.get(url)
            return results;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error)
    }
};