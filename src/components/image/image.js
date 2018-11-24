import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from './constants';
import modifiers from '../../modifiers';
import Element from '../element';

export default class Image extends PureComponent {
  static propTypes = {
    ...modifiers.propTypes,
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    rounded: PropTypes.bool,
    style: PropTypes.shape({}),
    size: PropTypes.oneOf(CONSTANTS.SIZES),
    fallback: PropTypes.string,
  }

  static defaultProps = {
    ...modifiers.defaultProps,
    className: '',
    src: '',
    alt: '',
    rounded: false,
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
      rounded,
      src,
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
        })}
      >
        <img
          className={classnames(className, {
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
