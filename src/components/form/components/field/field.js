import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldLabel from './field-label';
import FieldBody from './field-body';

import Element from '../../../element';

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
  ...Element.propTypes,
  align: PropTypes.oneOf(['centered', 'right']),
  kind: PropTypes.oneOf(['addons', 'group']),
  multiline: PropTypes.bool,
  horizontal: PropTypes.bool,
};

Field.defaultProps = {
  ...Element.defaultProps,
};

export default Field;
