import PropTypes from 'prop-types';

export default {
  propTypes: {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
  },
  defaultProps: {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClick: () => {},
  },
  props: ({
    onChange,
    onFocus,
    onBlur,
    onClick,
  }) => ({
    onChange,
    onFocus,
    onBlur,
    onClick,
  }),
};
