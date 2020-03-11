import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from './constants';
import modifiers from '../../modifiers';
import Element from '../element';

export default class Image extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onError = () => {
    this.setState({
      src: this.props.fallback,
    });
  };

  static getDerivedStateFromProps = (props, state) => ({
    src: state.default !== props.src ? props.src : state.src,
    default: props.src,
  });

  render() {
    const {
      className,
      alt,
      size,
      fallback,
      rounded,
      src,
      fullwidth,
      ...props
    } = this.props;
    let s = size;

    if (typeof size === 'number') {
      s = `${s}x${s}`;
    }

    return (
      <Element
        {...props}
        renderAs="figure"
        className={classnames('image', className, {
          [`is-${s}`]: s,
          'is-fullwidth': fullwidth,
        })}
      >
        <img
          className={classnames({
            'is-rounded': rounded,
          })}
          onError={this.onError}
          src={this.state.src}
          alt={alt}
        />
      </Element>
    );
  }
}

Image.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  rounded: PropTypes.bool,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(CONSTANTS.SIZES),
  fallback: PropTypes.string,
  fullwidth: PropTypes.bool,
};

Image.defaultProps = {
  ...modifiers.defaultProps,
  className: undefined,
  src: '',
  alt: '',
  rounded: false,
  style: undefined,
  size: undefined,
  fallback: 'https://bulma.io/images/placeholders/480x480.png',
  fullwidth: false,
};
