import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Element from 'react-bulma-components/lib/components/element';
import { FormattedMessage, defineMessages } from 'react-intl';
import Icon from 'components/icon';
import Link from 'components/link';
import Columns from 'react-bulma-components/lib/components/columns';
import Button from 'react-bulma-components/lib/components/button';
import Level from 'react-bulma-components/lib/components/level';

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
});

const Banner = () => (
<Hero color="primary">
  <Hero.Body style={{ display: 'block' }} paddingless>
    <Element className="is-vertically-centered" style={{ position: 'relative '}}>
      <Icon responsive={{ desktop: { hide: { value: true } }}} color="dark" icon="logo" className="is-20" style={{ opacity: .1, position: 'absolute' }} />
      <Columns style={{ zIndex: 1 }}>
        <Columns.Column style={{ width: 350, padding: '3em 0' }}>
          <Heading>
            React Bulma Components
          </Heading>
          <Heading subtitle>
            <FormattedMessage {...messages.title} />
            <Level style={{ marginTop: 10 }} breakpoint="mobile">
              <Level.Item>
                <a target="_blank" rel="noopener noreferrer" style={{ maxHeight: 20 }} href="https://www.npmjs.com/package/react-bulma-components">
                  <img alt="downloads per month" src="https://img.shields.io/npm/dm/react-bulma-components.svg" />
                </a>
              </Level.Item>
              <Level.Item style={{ paddingLeft: '1.5rem' }}>
                <iframe style={{ maxHeight: 20 }} title="github-starts" src="https://ghbtns.com/github-btn.html?user=couds&repo=react-bulma-components&type=star&count=true&size=medium" />
              </Level.Item>
            </Level>
          </Heading>
          <Columns breakpoint="mobile">
            <Columns.Column size={6}>
              <Button renderAs={Link} to="/getting-started">
                <FormattedMessage {...messages.gettingStarted} />
              </Button>
            </Columns.Column>
            <Columns.Column size={6}>
              <Button color="info" inverted renderAs={Link} to="/documentation">
                <FormattedMessage {...messages.docs} />
              </Button>
            </Columns.Column>
          </Columns>
        </Columns.Column>
        <Columns.Column className="is-vertically-centered" narrow >
          <Columns multiline={false} responsive={{ touch: { hide: { value: true } }}}>
            <Columns.Column />
            <Columns.Column narrow>
              <Icon size={10} icon="react" color="dark" style={{ opacity: '.4 '}} />
            </Columns.Column>
            <Columns.Column narrow className="is-vertically-centered">
              <Icon size="large" icon="plus" color="dark" style={{ opacity: '.4 '}} />
            </Columns.Column>
            <Columns.Column narrow>
              <Icon size={10} icon="bulma" color="dark" style={{ opacity: '.4 '}} />
            </Columns.Column>
            <Columns.Column narrow className="is-vertically-centered">
              <Icon size="large" icon="equals" color="dark" style={{ opacity: '.4 '}} />
            </Columns.Column>
            <Columns.Column narrow>
              <Icon size={10} icon="logo" color="dark" style={{ opacity: '.4 '}} />
            </Columns.Column>
            <Columns.Column />
          </Columns>
        </Columns.Column>
      </Columns>
    </Element>
  </Hero.Body>
</Hero>
);

export default Banner;
