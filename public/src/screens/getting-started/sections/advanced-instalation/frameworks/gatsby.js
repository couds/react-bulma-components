import React from 'react';
import Highlight from 'components/highlight';
import { Trans } from '@lingui/macro';

const Gatsby = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <p>
        <Trans>You need to enable SASS compilation on your Gatsby project, See instructions <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/">here</a></Trans>
      </p>
      <p>
        <Trans>Configure the sass plugin to include the path where you put the _variables.sass file, for example</Trans>
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
        <Trans>Where <code>./src</code> its where you put the <code>_variables.sass</code> file</Trans>
      </p>
    </>
  );
};

export default Gatsby;
