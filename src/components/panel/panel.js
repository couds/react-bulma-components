import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import Element from '../element';
import Block from './components/block';
import Header from './components/header';
import Icon from './components/icon';
import Tabs from './components/tabs';

const Panel = React.forwardRef(({ className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('panel', className)} />
));

Panel.Header = Header;

Panel.Tabs = Tabs;

Panel.Block = Block;

Panel.Icon = Icon;

Panel.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Panel.defaultProps = {
  ...modifiers.defaultProps,
  className: '',
  renderAs: 'nav'
};

export default Panel;
