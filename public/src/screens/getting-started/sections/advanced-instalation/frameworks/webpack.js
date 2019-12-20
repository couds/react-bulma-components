import React from 'react';
import Highlight from 'components/highlight';
import { Trans } from '@lingui/macro';

const Webpack = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <p>
        <Trans>
          Configure your webpack to handle SASS files. See instructions{' '}
          <a href="https://github.com/webpack-contrib/sass-loader">here</a>
        </Trans>
      </p>
      <p>
        <Trans>
          Inside the resolve directive setup your webpack to use modules from
          the folder where you put the _variables.sass file
        </Trans>
      </p>
      <Highlight className="language-javascript">
        {`
{
  // ...
  resolve: {
    modules: ['node_modules', 'src'],
    // ...
  }
}
      `.trim()}
      </Highlight>
      <p>
        <Trans>
          Where <code>./src</code> its where you put the{' '}
          <code>_variables.sass</code> file
        </Trans>
      </p>
    </>
  );
};

export default Webpack;
