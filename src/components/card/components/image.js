import React from 'react';
import classnames from 'classnames';
import Image from '../../image';

export default class CardImage extends React.PureComponent {
  static displayName = 'Card.Image'

  static propTypes = Image.propTypes

  static defaultProps = Image.defaultProps

  render() {
    const {
      className,
      style,
      ...props
    } = this.props;
    return (
      <div
        style={style}
        className={classnames('card-image', className)}
      >
        <Image {...props} />
      </div>
    );
  }
}
