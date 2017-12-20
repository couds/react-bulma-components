import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Image extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.shape({}),
    size: PropTypes.oneOf([16, 24, 32, 48, 64, 96, 128, 'square', '1by1', '4by3', '3by2', '16by9', '2by1']),
    fallback: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    src: '',
    alt: '',
    style: {},
    size: null,
    fallback: 'http//bulma.io/images/placeholders/480x480.png',
  }

  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.setState({
        src: nextProps.src,
      });
    }
  }

  onError = () => {
    this.setState({
      src: this.props.fallback,
    });
  }

  render() {
    const {
      className,
      alt,
      size,
      fallback,
      src,
      ...props
    } = this.props;

    let s = this.props.size;

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
        <img onError={this.onError} src={this.state.src} alt={alt} />
      </figure>
    );
  }
}
