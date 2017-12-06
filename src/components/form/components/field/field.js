import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldLabel from './field-label';
import FieldBody from './field-body';


export default class Field extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    /**
     * the Html or React element you want to use to render this component
     */
    renderAs: PropTypes.string,
    /**
     * Alignment of the breadcrumb, by default is Left
     */
    align: PropTypes.oneOf(['centered', 'right']),
    /**
     * Type of field (see Bulma Field)
     */
    kind: PropTypes.oneOf(['addons', 'group']),
    /**
     * True if is a multiline field
     */
    multiline: PropTypes.bool,
    /**
     * True if you are building a horizontal form
     */
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
      children,
      className,
      style,
      renderAs,
      align,
      multiline,
      horizontal,
      ...props
    } = this.props;
    const Element = renderAs;
    let kind = null;

    if (props.kind === 'addons') {
      kind = 'has-addons';
    } else if (props.kind === 'group') {
      kind = 'is-grouped';
    }

    return (
      <Element
        style={style}
        className={classnames('field', className, {
          [`${kind}`]: kind,
          [`${kind}-${align}`]: kind && align,
          [`${kind}-multiline`]: kind === 'is-grouped' && multiline,
          'is-horizontal': horizontal,
        })}
      >
        {children}
      </Element>
    );
  }
}
