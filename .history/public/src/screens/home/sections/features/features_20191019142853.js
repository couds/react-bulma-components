import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Icon from 'components/icon';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';
import { Trans } from '@lingui/macro';

import './features.scss';

const features = [{
  title: <Trans id="free">Free</Trans>,
  description: (
    <Trans id="free description">
      Open source on <a rel="noopener noreferrer" target="_blank" href="https://github.com/couds/react-bulma-components">Github</a>
    </Trans>
  ),
  icon: 'github-alt',
},{
  title: <Trans id="light weight">Light Weight</Trans>,
  description: <Trans id="light weight description">No external dependencies</Trans>,
  icon: 'quill',
},{
  title: <Trans id="modular">Modular</Trans>,
  description: <Trans id="modular description">Include only the code you use</Trans>,
  icon: 'modular',
},{
  title: <Trans id="responsive">Responsive</Trans>,
  description: <Trans id="responsive description">Made for <b>Mobile</b> first</Trans>,
  icon: 'responsive',
}];

const Features = () => (
  <Section className="home-features">
    <Columns textAlignment="centered">
      {
        features.map((feature, i) => (
          <Columns.Column key={i}>
            <Heading size={4}>
              {feature.title}
            </Heading>
            <Heading size={6} subtitle>
              {feature.description}
            </Heading>
            <Icon icon={feature.icon} size="large" />
          </Columns.Column>
        ))
      }
      </Columns>
  </Section>
);

export default Features;
