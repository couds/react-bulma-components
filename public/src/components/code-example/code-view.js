import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bulma-components/lib/components/button';
import Highlight from 'components/highlight';
import { Trans } from '@lingui/macro';

const CodeView = ({ reactCode, bulmaCode }) => {
  const [codeView, setCodeView] = useState('react');

  return (
    <>
      <Button
        size="small"
        style={{ position: 'absolute', right: 0, margin: 10 }}
        onClick={() => setCodeView(codeView === 'react' ? 'bulma' : 'react')}
      >
        <Trans id="toggle">Toggle</Trans>
      </Button>
      <Highlight language={codeView === 'react' ? 'jsx' : 'html'}>
        {(codeView === 'react' ? reactCode : bulmaCode).trim()}
      </Highlight>
    </>
  );
};

CodeView.propTypes = {
  reactCode: PropTypes.string,
  bulmaCode: PropTypes.string,
};

export default CodeView;
