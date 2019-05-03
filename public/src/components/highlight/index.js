import React from 'react';
import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Highlight = ({ style, ...props}) => (
  <div style={{ flex:1, ...style }}>
    <Prism {...props} style={atomDark} />
  </div>
);

export default Highlight;
