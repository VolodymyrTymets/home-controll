import { compose, hoistStatics, withHandlers, withState } from 'recompose';
import { TimePickerAndroid } from 'react-native';
import api from '../../utils/api';

import Component from './Component';

const logError = error => console.log(error);

const enhance = compose(
  withState('time', 'setTime', { from: {}, to: {} }),
  withHandlers({
    onPress: props => type => () => {
      if (type === 'on') {
        console.log('api ->', api);
        return api.lightOn()
          .then(console.log('-> light on'))
          .catch(logError);
      }
      if (type === 'off') {
        return api.lightOff()
          .then(console.log('-> light off'))
          .catch(logError);
      }
    },
    onSelectDate: props => type => async () => {
      try {
        const { hour, minute } = await TimePickerAndroid.open({
          hour: 14,
          minute: 0,
          is24Hour: false, // Will display '2 PM'
        });
        console.log('time ->', { ...props.time, [type]: { hour, minute } });
        props.setTime({ ...props.time, [type]: { hour, minute } });
      } catch ({code, message}) {
        console.warn('Cannot open time picker', message);
      }
    }
  }),
);

export default hoistStatics(enhance)(Component);