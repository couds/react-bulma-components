import PropTypes from 'prop-types';
import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';

import CodeView from './code-view';

import './code-example.scss';

const CodeExample = ({
  alignment,
  children,
  reactCode,
  bulmaCode,
  style,
  size,
  codeMaxHeight,
}) => (
    <div className="code-example" style={{ overflow: 'hidden', position: 'relative', ...style }}>
      {alignment === 'horizontal'
        ? (
          <Columns gapless>
            <Columns.Column size={size} className="is-vertically-centered">
              {children}
            </Columns.Column>
            <Columns.Column className="code" size={12 - size} style={{ maxHeight: codeMaxHeight, overflowY: 'scroll' }} >
              <CodeView reactCode={reactCode} bulmaCode={bulmaCode} />
            </Columns.Column>
          </Columns>
        )
        : (
          <>
            {children}
            <div>
              <CodeView reactCode={reactCode} bulmaCode={bulmaCode} />
            </div>
          </>
        )
      }
    </div>
  );

CodeExample.propTypes = {
  alignment: PropTypes.oneOf(['horizontal', 'vertical']),
  children: PropTypes.node,
  reactCode: PropTypes.string,
  bulmaCode: PropTypes.string,
  style: PropTypes.shape({}),
  size: PropTypes.number,
  codeMaxHeight: PropTypes.number,
};

CodeExample.defaultProps = {
  size: 6,
  reactCode: '',
  bulmaCode: '',
};

export default CodeExample;
