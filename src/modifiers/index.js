import classNames from 'classnames';
import helpers from './helpers';
import responsive from './responsives';
import colors from './colors';
import typography from './typography';
import spacing from './spacing';
import flexbox from './flexbox';

const compose = (...fns) => (args) => fns.reduce((arg, fn) => fn(arg), args);

export default {
  propTypes: {
    ...helpers.propTypes,
    ...responsive.propTypes,
    ...colors.propTypes,
    ...typography.propTypes,
    ...flexbox.propTypes,
  },
  defaultProps: {
    ...helpers.defaultProps,
    ...responsive.defaultProps,
    ...colors.defaultProps,
    ...typography.defaultProps,
    ...flexbox.defaultProps,
  },
  classnames: (props) =>
    classNames(
      helpers.classnames(props),
      responsive.classnames(props),
      colors.classnames(props),
      typography.classnames(props),
      spacing.classnames(props),
      flexbox.classnames(props),
    ),
  clean: (props) =>
    compose(
      helpers.clean,
      responsive.clean,
      colors.clean,
      typography.clean,
      spacing.clean,
      flexbox.clean,
    )(props),
};
