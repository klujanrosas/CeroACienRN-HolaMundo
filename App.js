import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: '#fff', fontSize: 25 }}>
          Hola Mundo esta es mi primera app con React Native!!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55acee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});
