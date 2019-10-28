import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import wiki from '../api/wiki';

const ResultsShowScreen = ({ navigation }) => {
	const [ result, setResult ] = useState(null);
	const id = navigation.getParam('id');
	const getResult = async (id) => {
    // old https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json 
    
		const response = await wiki.get(
			`${id}`, {
        params: {
          action: 'query',
          prop: 'info',
          pageids: id,
          inprop: 'url',
          format: 'json'
        }
      }
    );
    setResult(response.data.query.pages[id]);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}
	return (
		<View>
      <Text>{result.fullurl}</Text>
			<WebView style={{ height: 350 }} originWhitelist={[ '*' ]} source={{ html: result }} />
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 200,
		width: 300,
		marginBottom: 10,
		marginLeft: 15
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 10,
		alignSelf: 'center'
	}
});

export default ResultsShowScreen;
