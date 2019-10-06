import React from 'react';
import Highlight from 'components/highlight';
import { Trans } from '@lingui/macro';


const CRA = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <p>
        <Trans>You need to enable SASS compilation on your CRA project, to do it just install node-sass</Trans>
      </p>
      <Highlight className="language-bash">{`npm i --save node-sass`}</Highlight> 
      <p>
        <Trans>Now create/update your jsconfig.json (or tsconfig if you are using typescript)</Trans>
      </p>
      <Highlight className="language-json">{`
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
      `.trim()}</Highlight> 
      <p>
        <Trans>Where <code>./src</code> its where you put the <code>_variables.sass</code> file</Trans>
      </p>
    </>
  );
};

export default CRA;
