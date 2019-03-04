import React from 'react';
import { defineMessages, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Highlight from 'components/highlight';

const messages = defineMessages({
  nodesass: {
    id: 'install node-sass in next',
    defaultMessage: 'You need to enable SASS compilation on your Next.js project, See the instructions <a href="https://github.com/zeit/next-plugins/tree/master/packages/next-sass">here</a>',
  },
  transpiledModules: {
    id: 'install transpiled modules next',
    defaultMessage: 'You will also need to configure the transpiled modules plugin next-plugin-transpile-modules so install it',
  },
  configure: {
    id: 'configure next to use variables file',
    defaultMessage: 'Now on your next.config.js configure your sass to include the directory where you put your _variables.sass file and add react-bulma-components to the transpiled modules',
  },
  srcLegend: {
    id: 'where src its your file location',
    defaultMessage: 'Where <code>./src</code> its where you put the <code>_variables.sass</code> file',
  },
})

const Next = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <p>
        <FormattedHTMLMessage {...messages.nodesass} />
      </p>
      <p>
        <FormattedMessage {...messages.transpiledModules} />
      </p>
      <Highlight className="language-bash">{`npm i --save-dev next-plugin-transpile-modules`}</Highlight> 
      <p>
        <FormattedMessage {...messages.configure} />
      </p>
      <Highlight className="language-javascript">{`
const withSass = require('@zeit/next-sass')
const withTM = require('next-plugin-transpile-modules');

module.exports = withTM(withSass({
    transpileModules: ['react-bulma-components'],
    sassLoaderOptions: {
        includePaths: ["./src"]
    },
}))
      `.trim()}</Highlight> 
      <p>
        <FormattedHTMLMessage {...messages.srcLegend} />
      </p>
    </>
  );
};

export default Next;
