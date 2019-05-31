import React, { useState } from 'react';
import H from 'react-bulma-components/lib/components/heading';
import Tabs from 'react-bulma-components/lib/components/tabs';
import Highlight from 'components/highlight';

import CRA from './frameworks/cra';

import './advanced-instalation.scss';
import Gatsby from './frameworks/gatsby';
import Next from './frameworks/next';
import Webpack from './frameworks/webpack';
import { Trans } from '@lingui/macro';


const AdvancedInstalation = () => {
  const [framework, setFramework] = useState('cra');
  return (
    <div className="advanced-instalation">
      <H size={5} >
        <Trans id="advanced instalation" >Advanced Instalation</Trans>
      </H>
      <H subtitle size={5}>
        <Trans id="advanced instalation subtitle">
        This configuration will allow you customize your build selecting the components you want to use (only incluying the code for the component you use) and customize Bulma using sass variables
        </Trans>
      </H>
      <p>
        <Trans id="create a _variables sass file">
          To enable the advance setup first create a file named _variables.sass somewhere in your project. (we recommend on your src folder).
        </Trans>
      </p>
      <p>
        <Trans id="import utilities sass in _variables">In the _variables.sass file import utilities/_all.sass</Trans>
      </p>
      <Highlight language="sass">{`@import '~bulma/sass/utilities/_all.sass'`}</Highlight>
      <p>
        <Trans id="advanced instalation description">
        Now depending of the Framework of your choose the configuration may vary a little, here you can find instructions of how to configure it on the most used Frameworks
        </Trans>
      </p>
      <Tabs type="boxed" fullwidth>
        <Tabs.Tab active={framework === 'cra'} onClick={() => setFramework('cra')}>Create React App</Tabs.Tab>
        <Tabs.Tab active={framework === 'next'} onClick={() => setFramework('next')}>Next.js</Tabs.Tab>
        <Tabs.Tab active={framework === 'gatsby'} onClick={() => setFramework('gatsby')}>Gatsby</Tabs.Tab>
        <Tabs.Tab active={framework === 'webpack'} onClick={() => setFramework('webpack')}>Webpack</Tabs.Tab>
      </Tabs>
      <div className="tab-box">
        {/* <CRA show={framework === 'cra'} />
        <Next show={framework === 'next'} />
        <Gatsby show={framework === 'gatsby'} />
        <Webpack show={framework === 'webpack'} /> */}
      </div>
    </div>
  );
};

export default AdvancedInstalation;
