import PropTypes from 'prop-types';
import classnames from 'classnames';

const SPACING_PROPS = [
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
];
const SIZES = [0, 1, 2, 3, 4, 5, 6];

export default {
  ...SPACING_PROPS.reduce(
    (props, name) => {
      props.propTypes[name] = PropTypes.oneOf(SIZES);
      props.defaultProps[name] = undefined;
      return props;
    },
    { propTypes: {}, defaultProps: {} },
  ),
  classnames: (props) =>
    classnames(
      SPACING_PROPS.reduce((classes, spacing) => {
        const spacingValue = props[spacing];
        classes[`${spacing}-${spacingValue}`] = spacingValue;
        return classes;
      }, {}),
    ),
  clean: (props) =>
    Object.keys(props).reduce((cleaned, propName) => {
      if (!SPACING_PROPS.includes(propName)) {
        cleaned[propName] = props[propName];
      }
      return cleaned;
    }, {}),
};
