import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import { FormattedMessage, defineMessages, FormattedHTMLMessage } from 'react-intl';
import Icon from 'components/icon';
import Columns from 'react-bulma-components/lib/components/columns';
import Section from 'react-bulma-components/lib/components/section';

import './features.scss';

const messages = defineMessages({
  modular: {
    id: 'modular',
    defaultMessage: 'Modular',
  },
  modularDescription: {
    id: 'modular description',
    defaultMessage: 'Include only the code you use',
  },
  free: {
    id: 'free',
    defaultMessage: 'Free'
  },
  freeDescription: {
    id: 'free description',
    defaultMessage: 'Open source on <a rel="noopener noreferrer" target="_blank" href="https://github.com/couds/react-bulma-components">Github</a>'
  },
  lightWeight: {
    id: 'light weight',
    defaultMessage: 'Light Weight',
  },
  lightWeightDescription: {
    id: 'light weight description',
    defaultMessage: 'No external dependencies',
  },
  responsive: {
    id: 'responsive',
    defaultMessage: 'Responsive',
  },
  responsiveDescription: {
    id: 'responsive description',
    defaultMessage: 'Made for <b>Mobile</b> first',
  },
});

const features = [{
  title: messages.free,
  description: messages.freeDescription,
  icon: 'github-alt',
},{
  title: messages.lightWeight,
  description: messages.lightWeightDescription,
  icon: 'quill',
},{
  title: messages.modular,
  description: messages.modularDescription,
  icon: 'modular',
},{
  title: messages.responsive,
  description: messages.responsiveDescription,
  icon: 'responsive',
}];

const Features = () => (
  <Section className="home-features">
    <Columns textAlignment="centered">
      {
        features.map(feature => (
          <Columns.Column key={feature.title.id}>
            <Heading size={4}>
              <FormattedMessage {...feature.title} />
            </Heading>
            <Heading size={6} subtitle>
              <FormattedHTMLMessage {...feature.description} />
            </Heading>
            <Icon icon={feature.icon} size="large" />
          </Columns.Column>
        ))
      }
      </Columns>
  </Section>
);

export default Features;
