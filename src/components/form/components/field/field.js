import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FieldLabel from './field-label';
import FieldBody from './field-body';

import Element from '../../../element';
import { normalizeAlign } from '../../../../services/normalizer';

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
        [`${k}-${normalizeAlign(align)}`]: k === 'is-grouped' && align,
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
  /**
   * `addon`: Will group together the controls without gap between
   * `group`: Will group together the controls with evenly seperation between
   */
  kind: PropTypes.oneOf(['addons', 'group']),
  /**
   * Working together with `kind="group"` to align all controls
   */
  align: PropTypes.oneOf(['center', 'right']),
  /**
   * When `kind="group"` will wrap to next line if the control do not fit on the current line
   */
  multiline: PropTypes.bool,
  /**
   * To create a 2 columns form, See `Form.Field.Label` and `Form.Field.Body` for more details
   */
  horizontal: PropTypes.bool,
};

Field.defaultProps = {};

export default Field;
