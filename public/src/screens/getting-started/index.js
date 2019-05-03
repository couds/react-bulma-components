import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import H from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';
import Button from 'react-bulma-components/lib/components/button';
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll';
import Menu from 'react-bulma-components/lib/components/menu';
import Container from 'react-bulma-components/lib/components/container';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import Highlight from 'components/highlight';
import CodeExample from 'components/code-example';

import AdvancedInstalation from './sections/advanced-instalation';

const messages = defineMessages({
  gettingStarted: {
    id: 'getting started',
    defaultMessage: 'Getting Started',
  },
  introduccionDescription: {
    id: 'introduction description',
    defaultMessage: 'This library aims to help you use the Bulma CSS Framework in your React project',
  },
  instalation: {
    id: 'instalation',
    defaultMessage: 'Instalation',
  },
  instalationDescription: {
    id: 'instalation description',
    defaultMessage: 'The easiest way to install React Bulma Components its using npm.',
  },
  usage: {
    id: 'usage',
    defaultMessage: 'Usage',
  },
  usageDescription: {
    id: 'usage description',
    defaultMessage: 'Currently there are two ways to use this library depending of your needs and configuration',
  },
  basic: {
    id: 'basic instalation',
    defaultMessage: 'Basic Instalation',
  },
  basicSubtitle: {
    id: 'basic instalation subtitle',
    defaultMessage: 'This configuration will allow you to start fast with minimum configuration but with less customization and no treeshaking by default (will include all components)',
  },
  basicDescription: {
    id: 'basic instalation description',
    defaultMessage: 'After the instalation you need to include the already transpiled bulma css, and you can start importing the component you need from the basic folder.',
  },
  advanced: {
    id: 'advanced intalation',
    defaultMessage: 'Advanced Instalation',
  },
})

const innerPadding = { margin: 25 };

const GettingStarted = ({ intl: { formatMessage  }}) => (
  <Container>
    <Columns>
      <Columns.Column size={2}  style={{ position: 'fixed', top: 52, bottom: 0 }} responsive={{ touch: { hide: { value: true }}}}>
        <Menu style={innerPadding}>
          <Menu.List title={formatMessage(messages.gettingStarted)}>
            <Menu.List.Item>
              <ScrollLink activeClass="is-active" to="instalation" smooth spy offset={-70} duration={500}>
                <FormattedMessage {...messages.instalation} />
              </ScrollLink>
            </Menu.List.Item>
            <Menu.List.Item renderAs="span">
              <Menu.List title={(
                <ScrollLink activeClass="is-active" to="usage" smooth spy offset={-70} duration={500}>
                  <FormattedMessage {...messages.usage} />
                </ScrollLink>
              )}>
                <Menu.List.Item>
                  <ScrollLink activeClass="is-active" to="basic-instalation" smooth spy offset={-70} duration={500}>
                    <FormattedMessage {...messages.basic} />
                  </ScrollLink>
                </Menu.List.Item>
                <Menu.List.Item>
                  <ScrollLink activeClass="is-active" to="advanced-instalation" smooth spy offset={-70} duration={500}>
                    <FormattedMessage {...messages.advanced} />
                  </ScrollLink>
                </Menu.List.Item>
              </Menu.List>
            </Menu.List.Item>
          </Menu.List>
        </Menu>
      </Columns.Column>
      <Columns.Column desktop={{ offset: 3 }} >
        <div style={innerPadding}>
          <H size={3}>
            <FormattedMessage {...messages.gettingStarted} />
          </H>
          <H subtitle size={3}>
            <FormattedMessage {...messages.introduccionDescription} />
          </H>
          <hr />
          <ScrollElement name="instalation">
            <H size={4}>
              <FormattedMessage {...messages.instalation} />
            </H>
            <H subtitle size={4}>
              <FormattedMessage {...messages.instalationDescription} />
            </H>
            <Highlight style={{ borderRadius: 5 }}>{`npm install react-bulma-components`}</Highlight>
          </ScrollElement>
          <hr />
          <ScrollElement name="usage">
            <H size={4} >
              <FormattedMessage {...messages.usage} />
            </H>
            <H subtitle size={4}>
              <FormattedMessage {...messages.usageDescription} />
            </H>
            <ScrollElement name="basic-instalation">
              <H size={5} >
                <FormattedMessage {...messages.basic} />
              </H>
              <H subtitle size={5}>
                <FormattedMessage {...messages.basicSubtitle} />
              </H>
              <p>
                <FormattedMessage {...messages.basicDescription} />
              </p>
              <Box paddingless>
                <CodeExample style={{ margin: '1.5rem 0' }}
                  size={3}
                  reactCode={`
  import React from 'react';
  import 'react-bulma-components/basic/react-bulma-components.min.css';
  import { Button } from 'react-bulma-components/dist';

  const App = () => (
    <div>
      <Button color="primary">My Bulma button</Button>
    </div>
  );`}
                  bulmaCode={`
  <div>
    <button class="button is-primary">My Bulma button</Button>
  </div>`}
                >
                  <Button color="primary">My Bulma button</Button>
                </CodeExample>
              </Box>
            </ScrollElement>
            <ScrollElement name="advanced-instalation">
              <AdvancedInstalation />
            </ScrollElement>
          </ScrollElement>
        </div>
      </Columns.Column>
    </Columns>
  </Container>
);

export default injectIntl(GettingStarted);
