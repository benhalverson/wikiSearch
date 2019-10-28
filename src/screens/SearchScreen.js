import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [ term, setTerm ] = useState('');
	
	
	const [ searchApi, results, errorMessage ] = useResults();
	return (
		<View>
			<SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList 
					results={results}
					title="Cost Effective"
					/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
