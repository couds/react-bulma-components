import PropTypes from 'prop-types';
import classnames from 'classnames';

import './notification.sass';
import CONSTANTS from '../../constants';

const roles = [null].concat(Object.keys(CONSTANTS.ROLES).map(key => CONSTANTS.ROLES[key]));


export default {
  propTypes: {
    type: PropTypes.oneOf(roles),
    notification: PropTypes.bool,
  },
  className: ({
    notification,
    type,
  }) => classnames({
    notification,
    [`is-${type}`]: type,
  }),
  defaultProps: {
    type: null,
    notification: false,
  },
};
