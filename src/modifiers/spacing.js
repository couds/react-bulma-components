import PropTypes from 'prop-types';
import classnames from 'classnames';

const modifierNames = [
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
const sizes = [0, 1, 2, 3, 4, 5, 6];

export default {
  ...modifierNames.reduce(
    (props, name) => {
      props.propTypes[name] = PropTypes.oneOf(sizes);
      props.defaultProps[name] = undefined;
      return props;
    },
    { propTypes: {}, defaultProps: {} },
  ),
  classnames: props =>
    classnames(
      Object.keys(props).reduce((classes, propName) => {
        if (modifierNames.includes(propName)) {
          classes[`${propName}-${props[propName]}`] = props[propName];
        }
        return classes;
      }, {}),
    ),
  clean: props =>
    Object.keys(props).reduce((cleaned, propName) => {
      if (!modifierNames.includes(propName)) {
        cleaned[propName] = props[propName];
      }
      return cleaned;
    }, {}),
};
