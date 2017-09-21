import PropTypes from 'prop-types';
import classnames from 'classnames';

import './notification.sass';
import CONSTANTS from '../../constants';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));


export default {
  propTypes: {
    color: PropTypes.oneOf(colors),
    notification: PropTypes.bool,
  },
  className: ({
    notification,
    color,
  }) => classnames({
    notification,
    [`is-${color}`]: color,
  }),
  defaultProps: {
    color: null,
    notification: false,
  },
};
