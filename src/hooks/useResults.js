import { useEffect, useState } from 'react';
import wiki from '../api/wiki';

export default () => {
	const [ results, setResults ] = useState([]);
	const [ errorMessage, setErrorMessage ] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const response = await wiki.get('/search', {
				params: {
					action: 'query',
					list: 'search',
					format: 'json',
					srsearch: searchTerm,
					srlimit: '50'
				}
			});
			
			setResults(response.data.query.search);
		} catch (e) {
			console.log('error', e)
			setErrorMessage(`Something went wrong \n${e.message}`);
		}
  };
  
  // including this for a default search
  // useEffect(() => {
  //   searchApi('Pasta');
  // }, []);

  return [searchApi, results, errorMessage];
};