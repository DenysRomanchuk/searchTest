import debounce from 'lodash.debounce';
import { fetchSearchResults } from '../api/peopleSearch';

export const debouncedFetchData = debounce((query, callBack) => {
    fetchData(query, callBack);
}, 500);

const fetchData = async (query, callBack) => {
    const response = await fetchSearchResults(query);
    callBack(response);
};