import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from './constants';
import modifiers from '../../modifiers';

class Image extends PureComponent {
  static propTypes = {
    ...modifiers.propTypes,
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.shape({}),
    size: PropTypes.oneOf(CONSTANTS.SIZES),
    fallback: PropTypes.string,
  }

  static defaultProps = {
    ...modifiers.defaultProps,
    className: '',
    src: '',
    alt: '',
    style: {},
    size: null,
    fallback: 'http//bulma.io/images/placeholders/480x480.png',
  }

  state = {}

  onError = () => {
    this.setState({
      src: this.props.fallback,
    });
  }

  static getDerivedStateFromProps = (props, state) => ({
    src: state.default !== props.src ? props.src : state.src,
    default: props.src,
  })

  render() {
    const {
      className,
      alt,
      size,
      fallback,
      src,
      innerRef,
      ...allProps
    } = this.props;
    const props = modifiers.clean(allProps);
    let s = size;

    if (typeof size === 'number') {
      s = `${s}x${s}`;
    }

    return (
      <figure
        {...props}
        className={classnames('image', className, {
          [`is-${s}`]: s,
        })}
      >
        <img ref={innerRef} onError={this.onError} src={this.state.src} alt={alt} />
      </figure>
    );
  }
}

export default React.forwardRef((props, ref) => <Image innerRef={ref} {...props} />);
