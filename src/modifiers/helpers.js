import PropTypes from 'prop-types';
import classnames from 'classnames';

export default {
  propTypes: {
    clearfix: PropTypes.bool,
    pull: PropTypes.oneOf([undefined, 'right', 'left']),
    marginless: PropTypes.bool,
    paddingless: PropTypes.bool,
    overlay: PropTypes.bool,
    clipped: PropTypes.bool,
    radiusless: PropTypes.bool,
    shadowless: PropTypes.bool,
    unselectable: PropTypes.bool,
    invisible: PropTypes.bool,
    hidden: PropTypes.bool,
  },
  defaultProps: {
    clearfix: undefined,
    pull: undefined,
    marginless: undefined,
    paddingless: undefined,
    overlay: undefined,
    clipped: undefined,
    radiusless: undefined,
    shadowless: undefined,
    unselectable: undefined,
    invisible: undefined,
    hidden: undefined,
  },
  classnames: props =>
    classnames({
      'is-clearfix': props.clearfix,
      [`is-pulled-${props.pull}`]: props.pull,
      'is-marginless': props.marginless,
      'is-paddingless': props.paddingless,
      'is-overlay': props.overlay,
      'is-clipped': props.clipped,
      'is-radiusless': props.radiusless,
      'is-shadowless': props.shadowless,
      'is-unselectable': props.unselectable,
      'is-invisible': props.invisible,
      'is-hidden': props.hidden,
    }),
  clean: ({
    hidden,
    clearfix,
    paddingless,
    pull,
    marginless,
    overlay,
    clipped,
    radiusless,
    shadowless,
    unselectable,
    invisible,
    ...props
  }) => props,
};
