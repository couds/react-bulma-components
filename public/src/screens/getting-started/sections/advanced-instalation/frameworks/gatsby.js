import React from 'react';
import { defineMessages, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Highlight from 'react-highlight';

const messages = defineMessages({
  nodesass: {
    id: 'enable node-sass in gatsby',
    defaultMessage: 'You need to enable SASS compilation on your Gatsby project, See instructions <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/">here</a>',
  },
  configurePath: {
    id: 'configure path for gatsby',
    defaultMessage: 'Configure the sass plugin to include the path where you put the _variables.sass file, for example'
  },
  srcLegend: {
    id: 'where src its your file location',
    defaultMessage: 'Where <code>./src</code> its where you put the <code>_variables.sass</code> file',
  },
});

const Gatsby = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <p>
        <FormattedHTMLMessage {...messages.nodesass} />
      </p>
      <p>
        <FormattedMessage {...messages.configurePath} />
      </p>
      <Highlight className="language-javascript">{`
plugins: [
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      includePaths: ['./src'],
    },
  }
  ...
]
      `.trim()}</Highlight>
      <p>
        <FormattedHTMLMessage {...messages.srcLegend} />
      </p>
    </>
  );
};

export default Gatsby;
