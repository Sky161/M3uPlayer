/**
 * @desc init app file
 *
 * @author Andrey Chechkin
 * @email andrey.chechkin@me.com
 * @create date 2018-02-18 10:01:11
*/

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

const App = () => <View style={styles.container}><Text>Welcome to m3u player</Text></View>;

export default App;
