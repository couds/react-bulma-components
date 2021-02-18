import PropTypes from 'prop-types';
import classNames from 'classnames';

const camelToKebab = (camel) =>
  camel.replace(/[A-Z]/g, (cap) => `-${cap.toLowerCase()}`);

const flexboxHelperPropTypes = {
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
    'start',
    'end',
    'left',
    'right',
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'space-evenly',
    'stretch',
    'start',
    'end',
    'baseline',
  ]),
  alignItems: PropTypes.oneOf([
    'auto',
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch',
  ]),
  flexGrow: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
};

const flexboxHelperNames = Object.keys(flexboxHelperPropTypes);

export default {
  propTypes: flexboxHelperPropTypes,
  defaultProps: flexboxHelperNames.reduce((defaults, flexboxHelperName) => {
    defaults[flexboxHelperName] = undefined;
    return defaults;
  }, {}),
  classnames: (props) =>
    classNames(
      flexboxHelperNames.reduce((classes, flexboxHelper) => {
        const propValue = props[flexboxHelper];
        classes[`is-${camelToKebab(flexboxHelper)}-${propValue}`] = propValue;
        return classes;
      }, {}),
    ),
  clean: (props) =>
    Object.keys(props).reduce((cleanedProps, propName) => {
      if (!flexboxHelperNames.includes(propName)) {
        cleanedProps[propName] = props[propName];
      }
      return cleanedProps;
    }, {}),
};
