import PropTypes from 'prop-types';
import classnames from 'classnames';

const colors = ['white', 'black', 'light', 'dark', 'primary', 'info', 'link', 'success', 'warning', 'danger', 'black-bis', 'black-ter', 'grey-darker', 'grey-dark', 'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis'];

export default {
  propTypes: {
    textColor: PropTypes.oneOf(colors),
    backgroundColor: PropTypes.oneOf(colors),
  },
  defaultProps: {
    textColor: null,
    backgroundColor: null,
  },
  classnames: props => classnames({
    [`has-text-${props.textColor}`]: props.textColor,
    [`has-background-${props.backgroundColor}`]: props.backgroundColor,
  }),
  clean: ({ textColor, backgroundColor, ...props }) => props,
};
