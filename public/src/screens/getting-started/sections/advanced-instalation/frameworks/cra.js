import React from 'react';
import { defineMessages, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Highlight from 'components/highlight';

const messages = defineMessages({
  nodesass: {
    id: 'install node-sass in cra',
    defaultMessage: 'You need to enable SASS compilation on your CRA project, to do it just install node-sass',
  },
  updatePackageJson: {
    id: 'update package json in cra',
    defaultMessage: 'Now update the scripts on your package.json file to let the builder now where to find the _variables.sass file',
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
        <FormattedMessage {...messages.updatePackageJson} />
      </p>
      <Highlight className="language-json">{`
"scripts": {
  "start": "NODE_PATH=./src react-scripts start",
  "build": "NODE_PATH=./src react-scripts build",
  "test": "NODE_PATH=./src react-scripts test",
  ...
}
      `.trim()}</Highlight> 
      <p>
        <FormattedHTMLMessage {...messages.srcLegend} />
      </p>
    </>
  );
};

export default CRA;
