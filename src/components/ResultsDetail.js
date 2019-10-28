import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'

const ResultsDetail = ({ result }) => {
	return (
		<View style={styles.container}>
      <Text>{result.title}, Word Count: {result.wordcount}</Text>
      <WebView style={styles.web}
        originWhitelist={['*']} 
        source={{html: result.snippet}}
      />
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  web: {
    height: 25,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
});

export default ResultsDetail;
