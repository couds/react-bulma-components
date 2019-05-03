import React from 'react';
import { defineMessages, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Highlight from 'components/highlight';

const messages = defineMessages({
  nodesass: {
    id: 'install node-sass in cra',
    defaultMessage: 'You need to enable SASS compilation on your CRA project, to do it just install node-sass',
  },
  addBasepath: {
    id: 'add base path to jsconfig',
    defaultMessage: 'Now create/update your jsconfig.json (or tsconfig if you are using typescript)',
  },
  srcLegend: {
    id: 'where src its your file location',
    defaultMessage: 'Where <code>./src</code> its where you put the <code>_variables.sass</code> file',
  },
})

const CRA = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <p>
        <FormattedMessage {...messages.nodesass} />
      </p>
      <Highlight className="language-bash">{`npm i --save node-sass`}</Highlight> 
      <p>
        <FormattedMessage {...messages.addBasepath} />
      </p>
      <Highlight className="language-json">{`
{
  "compilerOptions": {
    "baseUrl": "./src"
  }
}
      `.trim()}</Highlight> 
      <p>
        <FormattedHTMLMessage {...messages.srcLegend} />
      </p>
    </>
  );
};

export default CRA;
