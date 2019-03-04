import React, { useState } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';

import { Prism as Hightlight } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FormattedMessage, defineMessages } from 'react-intl';

import './code-example.scss';

const messages = defineMessages({
  toggle: {
    id: 'toggle',
    defaultMessage: 'Toggle',
  },
});

const CodeExample = ({ children, reactCode, bulmaCode, style, size }) => {
  const [current, setCurrent] = useState('react'); // react or bulma
  return (
    <div className="code-example" style={{ overflow: 'hidden', position: 'relative', ...style }}>
      <Columns gapless>
        <Columns.Column size={size} className="is-vertically-centered">
          {children}
        </Columns.Column>
        <Columns.Column className="code"  size={12 -size} >
          <Button 
          size="small"
          style={{ position: 'absolute', top: 0, right: 0}}
          onClick={() => setCurrent(current === 'react' ? 'bulma' : 'react')}>
            <FormattedMessage {...messages.toggle} />
          </Button>
          <Hightlight language={current === 'react' ? 'jsx' : 'html'} style={atomDark}>
            {(current === 'react' ? reactCode : bulmaCode).trim()}
          </Hightlight>
        </Columns.Column>
      </Columns>
    </div>
  );
}

CodeExample.defaultProps = {
  size: 6,
  reactCode: '',
  bulmaCode: '',
};

export default CodeExample;