import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldLabel from './field-label';
import FieldBody from './field-body';

const Field = ({
  children,
  className,
  style,
  renderAs,
  align,
  multiline,
  horizontal,
  ...props
}) => {
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
};

Field.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string,
  align: PropTypes.oneOf(['centered', 'right']),
  kind: PropTypes.oneOf(['addons', 'group']),
  multiline: PropTypes.bool,
  horizontal: PropTypes.bool,
};

Field.defaultProps = {
  children: null,
  className: '',
  style: {},
  renderAs: 'div',
  align: null,
  kind: null,
  multiline: false,
  horizontal: false,
};

Field.Label = FieldLabel;
Field.Body = FieldBody;

export default Field;
