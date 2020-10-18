import PropTypes from 'prop-types';
import classnames from 'classnames';

const MODIFIER_NAMES = [
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
];
const SIZES = [0, 1, 2, 3, 4, 5, 6];

export default {
  ...MODIFIER_NAMES.reduce(
    (props, name) => {
      props.propTypes[name] = PropTypes.oneOf(SIZES);
      props.defaultProps[name] = undefined;
      return props;
    },
    { propTypes: {}, defaultProps: {} },
  ),
  classnames: (props) =>
    classnames(
      Object.keys(props).reduce((classes, propName) => {
        if (MODIFIER_NAMES.includes(propName)) {
          classes[`${propName}-${props[propName]}`] = props[propName];
        }
        return classes;
      }, {}),
    ),
  clean: (props) =>
    Object.keys(props).reduce((cleaned, propName) => {
      if (!MODIFIER_NAMES.includes(propName)) {
        cleaned[propName] = props[propName];
      }
      return cleaned;
    }, {}),
};
