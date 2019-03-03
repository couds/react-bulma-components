import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import LocaleContext from '../../locales/context';

const LocalizedLink = ({ to, ...props}) => (
  <LocaleContext.Consumer>
    {
      (locale) => (
        <NavLink {...props} to={`/${locale}${to}`} />
      )
    }
  </LocaleContext.Consumer>
);

export default LocalizedLink;

