import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import wiki from '../api/wiki';
import { Linking } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
	const [ result, setResult ] = useState(null);
	const link = () => {
		Linking.openURL(result.fullurl);
	};
	const anthem = 'https://anthem.com';
	const anthemLink = () => {
		Linking.openURL(`${anthem}`);
	};
	const id = navigation.getParam('id');
	const getResult = async (id) => {
		const response = await wiki.get(`${id}`, {
			params: {
				action: 'query',
				prop: 'info',
				pageids: id,
				inprop: 'url',
				format: 'json'
			}
		});
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
			<Text>Click below to open in a browser</Text>
			<TouchableOpacity onPress={link}>
				<Text style={styles.link}>{result.fullurl}</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={anthemLink}>
				<Button style={styles.link} title={anthem} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	link: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 20,
		alignSelf: 'center'
	}
});

export default ResultsShowScreen;
