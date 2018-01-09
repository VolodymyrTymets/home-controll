import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  margin:{
    margin: 5,
  },
  colorBlue: {
    backgroundColor: 'blue',
  },
  colorBlack: {
    backgroundColor: 'black',
  },
  colorGreen: {
    backgroundColor: '#26c6da',
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 15,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
  }
});

const LightControl = ({ onPress, onSelectDate, time }) => (
  <View style={[styles.container]}>
    <View style={[styles.margin]}>
      <Button
        raised
        large
        onPress={onPress('on')}
        buttonStyle={[styles.colorBlue]}
        textStyle={{textAlign: 'center'}}
        title='Light on' />
    </View>
    <View style={[styles.margin]}>
      <Button
        raised
        large
        onPress={onPress('off')}
        buttonStyle={[styles.colorBlack]}
        textStyle={{textAlign: 'center'}}
        title='Light Off' />
    </View>
    <View style={[styles.margin, styles.headerContainer]}>
      <Text style={[styles.header]}> Working hours </Text>
    </View>
    <View style={[,styles.margin, styles.selectorContainer]}>
      <Text> From </Text>
      <TouchableOpacity onPress={onSelectDate('from')}>
        <Text>{time.from.hour ? `${time.from.hour}:${time.from.minute}` : 'Select...'}</Text>
      </TouchableOpacity>
    </View>
    <View style={[styles.margin, styles.selectorContainer]}>
      <Text> To </Text>
      <TouchableOpacity onPress={onSelectDate('to')}>
        <Text>{time.to.hour ? `${time.to.hour}:${time.to.minute}` : 'Select...'}</Text>
      </TouchableOpacity>
    </View>
    <View style={[styles.margin]}>
      <Button
        raised
        large
        onPress={onPress('time')}
        buttonStyle={[styles.colorGreen]}
        textStyle={{textAlign: 'center'}}
        title='Save working hours' />
    </View>
  </View>
);


LightControl.propTypes = {
  onPress: PropTypes.func.isRequired,
  onSelectDate: PropTypes.func.isRequired,
  time: PropTypes.object.isRequired,
};
export default LightControl;
