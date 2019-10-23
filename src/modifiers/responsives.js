import PropTypes from 'prop-types';
import classnames from 'classnames';

const displays = ['block', 'flex', 'inline', 'inline-block', 'inline-flex'];

const getSizeClassFromProp = sizes =>
  Object.keys(sizes).reduce((classes, size) => {
    const display = sizes[size].display || {};
    const hide = sizes[size].hide || {};
    const textSize = sizes[size].textSize || {};
    const textAlignment = sizes[size].textAlignment || {};

    const obj = {
      ...classes,
      [`is-${display.value}-${size}${
        display.only ? '-only' : ''
      }`]: display.value,
      [`is-hidden-${size}${hide.only ? '-only' : ''}`]: hide.value,
      [`has-text-${textAlignment.value}-${size}${
        textAlignment.only ? '-only' : ''
      }`]: textAlignment.value,
      [`is-size-${textSize.value}-${size}`]: textSize.value > 0,
    };

    return obj;
  }, {});

const sizeShape = PropTypes.shape({
  display: PropTypes.shape({
    value: PropTypes.oneOf(displays),
    only: PropTypes.bool,
  }),
  hide: PropTypes.shape({
    value: PropTypes.bool,
    only: PropTypes.bool,
  }),
  textSize: PropTypes.shape({
    value: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  }),
  textAlignment: PropTypes.shape({
    value: PropTypes.oneOf(['centered', 'justified', 'left', 'right']),
    only: PropTypes.bool,
  }),
});

export default {
  propTypes: {
    responsive: PropTypes.shape({
      mobile: sizeShape,
      tablet: sizeShape,
      desktop: sizeShape,
      widescreen: sizeShape,
      fullhd: sizeShape,
      touch: sizeShape,
    }),
  },
  defaultProps: {
    responsive: undefined,
  },
  classnames: props =>
    classnames({
      ...getSizeClassFromProp(props.responsive || {}),
    }),
  clean: ({ responsive, hide, ...props }) => props,
};
