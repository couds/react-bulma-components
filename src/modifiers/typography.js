import PropTypes from 'prop-types';
import classnames from 'classnames';

export default {
  propTypes: {
    textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    textAlignment: PropTypes.oneOf(['centered', 'justified', 'left', 'right']),
    textTransform: PropTypes.oneOf(['capitalized', 'lowercase', 'uppercase']),
    textWeight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
    textFamily: PropTypes.oneOf([
      'sans-serif',
      'monospace',
      'primary',
      'secondary',
      'code',
    ]),
    italic: PropTypes.bool,
  },
  defaultProps: {
    textSize: undefined,
    textAlignment: undefined,
    textTransform: undefined,
    textWeight: undefined,
    textFamily: undefined,
    italic: undefined,
  },
  classnames: (props) =>
    classnames({
      [`has-text-${props.textAlignment}`]: props.textAlignment,
      [`has-text-weight-${props.textWeight}`]: props.textWeight,
      [`is-size-${props.textSize}`]: props.textSize,
      [`is-${props.textTransform}`]: props.textTransform,
      [`is-family-${props.textFamily}`]: props.textFamily,
      'is-italic': props.italic,
    }),
  clean: ({
    textWeight,
    textTransform,
    italic,
    textSize,
    textAlignment,
    textFamily,
    ...props
  }) => props,
};
