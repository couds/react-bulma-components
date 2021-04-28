import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Element from '../../element';

const PanelIcon = ({ className, ...props }) => {
  return <Element {...props} className={classnames('panel-icon', className)} />;
};

PanelIcon.propTypes = {
  renderAs: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.object,
  ]),
};

PanelIcon.defaultProps = {
  renderAs: 'span',
};

export default PanelIcon;
