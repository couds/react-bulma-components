import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldLabel from './field-label';
import FieldBody from './field-body';


export default class Field extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    align: PropTypes.oneOf(['centered', 'right']),
    kind: PropTypes.oneOf(['addons', 'group']),
    multiline: PropTypes.bool,
    horizontal: PropTypes.bool,
  };

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
    align: null,
    kind: null,
    multiline: false,
    horizontal: false,
  };

  static Label = FieldLabel;
  static Body = FieldBody;

  render() {
    const {
      className,
      renderAs,
      align,
      multiline,
      horizontal,
      kind,
      ...props
    } = this.props;
    const Element = renderAs;
    let k = null;

    if (kind === 'addons') {
      k = 'has-addons';
    } else if (kind === 'group') {
      k = 'is-grouped';
    }

    return (
      <Element
        {...props}
        className={classnames('field', className, {
          [`${k}`]: k,
          [`${k}-${align}`]: k && align,
          [`${k}-multiline`]: k === 'is-grouped' && multiline,
          'is-horizontal': horizontal,
        })}
      />
    );
  }
}
