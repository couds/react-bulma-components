import React from 'react';
import Link from 'react-router-dom/Link';
import LocaleContext from '../../locales/context';

const LocalizedLink = ({ to, ...props}) => (
  <LocaleContext.Consumer>
    {
      (locale) => (
        <Link {...props} to={`/${locale}${to}`} />
      )
    }
  </LocaleContext.Consumer>
);

export default LocalizedLink;

