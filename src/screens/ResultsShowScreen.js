import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import wiki from '../api/wiki';

const ResultsShowScreen = ({ navigation }) => {
	const [ result, setResult ] = useState(null);
	const id = navigation.getParam('id');
	const getResult = async (id) => {
		const response = await wiki.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
  }, []);
  
  if (!result) {
    return null;
  }
	return (
		<View>
			{/* <Text style={styles.title}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={( {item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      /> */}
<Text>Results Show Screen</Text>
      
		</View>
	);
};


const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
    marginLeft: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center'
  }
});

export default ResultsShowScreen;
