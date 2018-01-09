import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LightControl from './src/views/LightControl'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <LightControl />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
