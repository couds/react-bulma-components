import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldLabel from './field-label';
import FieldBody from './field-body';
import modifiers from '../../../../modifiers';
import Element from '../../../element';
import renderAsShape from '../../../../modifiers/render-as';

const Field = ({ className, align, multiline, horizontal, kind, ...props }) => {
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
};

Field.Label = FieldLabel;

Field.Body = FieldBody;

Field.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  renderAs: renderAsShape,
  align: PropTypes.oneOf(['centered', 'right']),
  kind: PropTypes.oneOf(['addons', 'group']),
  multiline: PropTypes.bool,
  horizontal: PropTypes.bool,
};

Field.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: undefined,
  style: undefined,
  renderAs: 'div',
  align: undefined,
  kind: undefined,
  multiline: undefined,
  horizontal: undefined,
};

export default Field;
