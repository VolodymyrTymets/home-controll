import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
   justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    margin: 5,
  },
  colorBlue: {
    backgroundColor: 'blue',
  },
  colorBlack: {
    backgroundColor: 'black',
  }
});

const LightControl = ({ onPress }) => (
  <View style={[styles.container]}>
    <Text> home control</Text>
    <Button
      raised
      large
      onPress={onPress('on')}
      buttonStyle={[styles.btn, styles.colorBlue]}
      textStyle={{textAlign: 'center'}}
      title='Light on' />
    <Button
      raised
      large
      onPress={onPress('off')}
      buttonStyle={[styles.btn, styles.colorBlack]}
      textStyle={{textAlign: 'center'}}
      title='Light Off' />
  </View>
);


LightControl.propTypes = {
  onPress: PropTypes.func.isRequired,
};
export default LightControl;
