import React, { useState } from 'react';
import H from 'react-bulma-components/lib/components/heading';
import Tabs from 'react-bulma-components/lib/components/tabs';
import { FormattedMessage, defineMessages } from 'react-intl';
import Highlight from 'components/highlight';

import CRA from './frameworks/cra';

import './advanced-instalation.scss';
import Gatsby from './frameworks/gatsby';
import Next from './frameworks/next';
import Webpack from './frameworks/webpack';

console.log('cra', CRA)

const messages = defineMessages({
  advanced: {
    id: 'advanced intalation',
    defaultMessage: 'Advanced Instalation',
  },
  advancedSubtitle: {
    id: 'advanced instalation subtitle',
    defaultMessage: 'This configuration will allow you customize your build selecting the components you want to use (only incluying the code for the component you use) and customize Bulma using sass variables',
  },
  commonStep1: {
    id: 'create a _variables sass file',
    defaultMessage: 'To enable the advance setup first create a file named _variables.sass somewhere in your project. (we recommend on your src folder).',
  },
  commonStep2: {
    id: 'import utilities sass in _variables',
    defaultMessage: 'In the _variables.sass file import utilities/_all.sass',
  },
  advancedDescription: {
    id: 'advanced instalation description',
    defaultMessage: 'Now depending of the Framework of your choose the configuration may vary a little, here you can find instructions of how to configure it on the most used Frameworks',
  },
});

const AdvancedInstalation = () => {
  const [framework, setFramework] = useState('cra');
  return (
    <div className="advanced-instalation">
      <H size={5} >
        <FormattedMessage {...messages.advanced} />
      </H>
      <H subtitle size={5}>
        <FormattedMessage {...messages.advancedSubtitle} />
      </H>
      <p>
        <FormattedMessage {...messages.commonStep1} />
      </p>
      <p>
        <FormattedMessage {...messages.commonStep2} />
      </p>
      <Highlight language="sass">{`@import '~bulma/sass/utilities/_all.sass'`}</Highlight>
      <p>
        <FormattedMessage {...messages.advancedDescription} />
      </p>
      <Tabs type="boxed" fullwidth>
        <Tabs.Tab active={framework === 'cra'} onClick={() => setFramework('cra')}>Create React App</Tabs.Tab>
        <Tabs.Tab active={framework === 'next'} onClick={() => setFramework('next')}>Next.js</Tabs.Tab>
        <Tabs.Tab active={framework === 'gatsby'} onClick={() => setFramework('gatsby')}>Gatsby</Tabs.Tab>
        <Tabs.Tab active={framework === 'webpack'} onClick={() => setFramework('webpack')}>Webpack</Tabs.Tab>
      </Tabs>
      <div className="tab-box">
        <CRA show={framework === 'cra'} />
        <Next show={framework === 'next'} />
        <Gatsby show={framework === 'gatsby'} />
        <Webpack show={framework === 'webpack'} />
      </div>
    </div>
  );
};

export default AdvancedInstalation;
