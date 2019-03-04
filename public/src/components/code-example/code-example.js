import React, { useState } from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';

import Highlight from 'components/highlight';

import { FormattedMessage, defineMessages } from 'react-intl';

import './code-example.scss';

const messages = defineMessages({
  toggle: {
    id: 'toggle',
    defaultMessage: 'Toggle',
  },
});

const CodeExample = ({ children, reactCode, bulmaCode, style, size, codeMaxHeight }) => {
  const [current, setCurrent] = useState('react'); // react or bulma
  return (
    <div className="code-example" style={{ overflow: 'hidden', position: 'relative', ...style }}>
      <Columns gapless>
        <Columns.Column size={size} className="is-vertically-centered">
          {children}
        </Columns.Column>
        <Columns.Column className="code"  size={12 -size} style={{ maxHeight: codeMaxHeight, overflowY: 'scroll' }} >
          <Button 
          size="small"
          style={{ position: 'absolute', top: 0, right: 0}}
          onClick={() => setCurrent(current === 'react' ? 'bulma' : 'react')}>
            <FormattedMessage {...messages.toggle} />
          </Button>
          <Highlight language={current === 'react' ? 'jsx' : 'html'}>
            {(current === 'react' ? reactCode : bulmaCode).trim()}
          </Highlight>
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