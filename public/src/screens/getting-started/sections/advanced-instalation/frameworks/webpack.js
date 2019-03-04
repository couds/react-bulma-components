import React from 'react';
import { defineMessages, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Highlight from 'components/highlight';

const messages = defineMessages({
  nodesass: {
    id: 'install node-sass in webpack',
    defaultMessage: 'Configure your webpack to handle SASS files. See instructions <a href="https://github.com/webpack-contrib/sass-loader">here</a>',
  },
  configure: {
    id: 'configure webpack to use variables file',
    defaultMessage: 'Inside the resolve directive setup your webpack to use modules from the folder where you put the _variables.sass file',
  },
  srcLegend: {
    id: 'where src its your file location',
    defaultMessage: 'Where <code>./src</code> its where you put the <code>_variables.sass</code> file',
  },
})

const Webpack = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <p>
        <FormattedHTMLMessage {...messages.nodesass} />
      </p>
      <p>
        <FormattedMessage {...messages.configure} />
      </p>
      <Highlight className="language-javascript">{`
{
  // ...
  resolve: {
    modules: ['node_modules', 'src'],
    // ...
  }
}
      `.trim()}</Highlight> 
      <p>
        <FormattedHTMLMessage {...messages.srcLegend} />
      </p>
    </>
  );
};

export default Webpack;
