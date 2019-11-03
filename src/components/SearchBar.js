import React from 'react';
import { View, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<TextInput
				autoCapitalize="none"
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
			<MaterialIcons name="search" style={styles.iconStyle} onPress={onTermSubmit} />
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 15,
		backgroundColor: '#ccc',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom: 10
	},
	inputStyle: {
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default SearchBar;
