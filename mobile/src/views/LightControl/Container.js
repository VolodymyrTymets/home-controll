import {compose, hoistStatics, withHandlers} from 'recompose';
import api from '../../utils/api';

import Component from './Component';

const logError = error => console.log(error);

const enhance = compose(
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
  }),
);

export default hoistStatics(enhance)(Component);