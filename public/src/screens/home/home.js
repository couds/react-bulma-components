import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Element from 'react-bulma-components/lib/components/element';
import { FormattedMessage, defineMessages } from 'react-intl';
import Icon from 'components/icon';
import Link from 'components/link';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';
import Content from 'react-bulma-components/lib/components/content';

import './home.scss';

const messages = defineMessages({
  title: {
    id: 'react bulma catch frase',
    defaultMessage: 'Everything you love of Bulma Framwork as React Components',
  },
  gettingStarted: {
    id: 'getting started',
    defaultMessage: 'Getting Started',
  },
  docs: {
    id: 'documentation',
    defaultMessage: 'Documentation',
  },
  version: {
    id: 'current version',
    defaultMessage: 'Current Version: {version}'
  },
  cssAsComponents: {
    id: 'css as components props',
    defaultMessage: 'CSS classes components props',
  },
  frameworkCompatible: {
    id: 'framework compatible',
    defaultMessage: 'Compatible with most used React Frameworks'
  },
  customizable: {
    id: 'easily customizable',
    defaultMessage: 'Easily customizable',
  },
  loremIpsum: {
    id: 'lorem ipsum',
    defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque tortor, vestibulum at lectus sit amet, molestie vulputate lorem. Morbi ipsum ligula, luctus vitae turpis a, vehicula tincidunt ipsum. Morbi nec purus at erat volutpat faucibus. Curabitur volutpat id orci quis consequat. Donec fermentum elementum leo non fermentum. Phasellus fringilla sollicitudin leo. Vestibulum ut leo vitae erat molestie condimentum nec et mauris. Integer metus massa, efficitur vitae eros sit amet, facilisis aliquet sem. Aenean condimentum laoreet vehicula. Vestibulum sed turpis a purus ultricies tempor et id odio. Nulla facilisi. In lobortis eu arcu at bibendum. Vestibulum efficitur lectus ut cursus bibendum.',
  },
})

const Index = () => (
  <div className="home">
    <Hero color="primary">
      <Hero.Body style={{ display: 'block' }} paddingless>
        <Element className="is-vertically-centered" style={{ position: 'relative '}}>
          <Icon color="dark" icon="logo" className="is-20" style={{ opacity: .4 }} />
          <Container style={{ position: 'absolute'}}>
            <div style={{ width: 350 }}>
              <Heading>
                React Bulma Components
              </Heading>
              <Heading subtitle>
                <FormattedMessage {...messages.title} />
              </Heading>
              <Columns breakpoint="mobile">
                <Columns.Column>
                  <Button renderAs={Link} to="/getting-started">
                    <FormattedMessage {...messages.gettingStarted} />
                  </Button>
                </Columns.Column>
                <Columns.Column>
                  <Button color="info" inverted renderAs={Link} to="/documentation">
                    <FormattedMessage {...messages.docs} />
                  </Button>
                </Columns.Column>
              </Columns>
              <Heading subtitle>
                <FormattedMessage {...messages.version} values={{ version: 'v3.0.1' }} />
              </Heading>
            </div>
          </Container>
        </Element>
      </Hero.Body>
    </Hero>
    <Hero>
      <Hero.Body>
        <Container style={{ marginTop: '2rem' }}>
          <Columns>
            <Columns.Column>
              <Heading>
                <FormattedMessage {...messages.cssAsComponents} />
              </Heading>
              <Content>
                <FormattedMessage {...messages.loremIpsum} />
              </Content>
            </Columns.Column>
            <Columns.Column>
              <Heading>
                <FormattedMessage {...messages.frameworkCompatible} />
              </Heading>
              <Content>
                <FormattedMessage {...messages.loremIpsum} />
              </Content>
            </Columns.Column>
            <Columns.Column>
              <Heading>
                <FormattedMessage {...messages.customizable} />
              </Heading>
              <Content>
              <FormattedMessage {...messages.loremIpsum} />
              </Content>
            </Columns.Column>
          </Columns>
        </Container>

      </Hero.Body>
    </Hero>
  </div>
);

export default Index;
