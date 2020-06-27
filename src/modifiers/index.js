import classnames from 'classnames';
import helpers from './helpers';
import responsive from './responsives';
import colors from './colors';
import typography from './typography';
import spacing from './spacing';

const compose = (...fns) => args => fns.reduce((arg, fn) => fn(arg), args);

export default {
  propTypes: {
    ...helpers.propTypes,
    ...responsive.propTypes,
    ...colors.propTypes,
    ...typography.propTypes,
  },
  defaultProps: {
    ...helpers.defaultProps,
    ...responsive.defaultProps,
    ...colors.defaultProps,
    ...typography.defaultProps,
  },
  classnames: props =>
    classnames(
      helpers.classnames(props),
      responsive.classnames(props),
      colors.classnames(props),
      typography.classnames(props),
      spacing.classnames(props),
    ),
  clean: props =>
    compose(
      helpers.clean,
      responsive.clean,
      colors.clean,
      typography.clean,
      spacing.clean,
    )(props),
};
