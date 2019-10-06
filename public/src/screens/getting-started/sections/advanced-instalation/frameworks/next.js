import React from 'react';
import Highlight from 'components/highlight';
import { Trans } from '@lingui/macro';

const Next = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <p>
        <Trans>You need to enable SASS compilation on your Next.js project, See the instructions <a href="https://github.com/zeit/next-plugins/tree/master/packages/next-sass">here</a></Trans>
      </p>
      <p>
        <Trans>You will also need to configure the transpiled modules plugin next-plugin-transpile-modules so install it</Trans>
      </p>
      <Highlight className="language-bash">{`npm i --save-dev next-plugin-transpile-modules`}</Highlight> 
      <p>
        <Trans>Now on your next.config.js configure your sass to include the directory where you put your _variables.sass file and add react-bulma-components to the transpiled modules</Trans>
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
        <Trans>Where <code>./src</code> its where you put the <code>_variables.sass</code> file</Trans>
      </p>
    </>
  );
};

export default Next;
