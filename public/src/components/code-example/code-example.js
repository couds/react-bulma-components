import React, { useState } from 'react';
import Hightlight from 'react-highlight';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';

import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  toggle: {
    id: 'toggle',
    defaultMessage: 'Toggle',
  },
});

const CodeExample = ({ children, reactCode, bulmaCode, style, size }) => {
  const [current, setCurrent] = useState('react'); // react or bulma
  return (
    <div style={{ overflow: 'hidden', position: 'relative', ...style }}>
      <Columns gapless>
        <Columns.Column size={size} className="is-vertically-centered">
          {children}
        </Columns.Column>
        <Columns.Column>
          <Button 
          size="small"
          style={{ position: 'absolute', top: 0, right: 0}}
          onClick={() => setCurrent(current === 'react' ? 'bulma' : 'react')}>
            <FormattedMessage {...messages.toggle} />
          </Button>
          <Hightlight language="jsx">
            {(current === 'react' ? reactCode : bulmaCode).trim()}
          </Hightlight>
        </Columns.Column>
      </Columns>
    </div>
  );
}

CodeExample.defaultProps = {
  size: 6,
};

export default CodeExample;