import cn from 'classnames';
import colors from './colors';
import helpers from './helpers';
import responsive from './responsives';
import typography from './typography';

const compose = (...fns) => args => fns.reduce((arg, fn) => fn(arg), args);

export default {
  propTypes: {
    ...helpers.propTypes,
    ...responsive.propTypes,
    ...colors.propTypes,
    ...typography.propTypes
  },
  defaultProps: {
    ...helpers.defaultProps,
    ...responsive.defaultProps,
    ...colors.defaultProps,
    ...typography.defaultProps
  },
  getClassName: props =>
    cn(
      helpers.getClassName(props),
      responsive.getClassName(props),
      colors.getClassName(props),
      typography.getClassName(props)
    ),
  clean: props =>
    compose(
      helpers.clean,
      responsive.clean,
      colors.clean,
      typography.clean
    )(props)
};
