import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Block from './components/block';
import Header from './components/header';
import Icon from './components/icon';
import Tabs from './components/tabs';
import modifiers from '../../modifiers';
import Element from '../element';

const Panel = ({
  className,
  ...props
}) => (
  <Element
    {...props}
    className={classnames('panel', className)}
  />
);

Panel.Header = Header;

Panel.Tabs = Tabs;

Panel.Block = Block;

Panel.Icon = Icon;

Panel.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
};

Panel.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'nav',
};

export default Panel;
