import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from '.';
import Section from '../section';
import Box from '../box';

const Link = ({
  to,
  children,
  className,
}) => (
  <a className={className} href={to}>{children}</a>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

storiesOf('Button', module)
  .addDecorator(story => (
    <div className="button-display">
      {story()}
    </div>
  ))
  .add('By Colors', withInfo('Buttons implmentation')(() => (
    <Section>
      <Box>
        <Button>
        Normal
        </Button>
        <Button color="primary">
        Primary
        </Button>
        <Button color="info">
        Info
        </Button>
        <Button color="danger">
        Danger
        </Button>
        <Button color="warning">
        Warning
        </Button>
        <Button color="success">
        Success
        </Button>
        <Button color="white">
        White
        </Button>
        <Button color="light">
        Light
        </Button>
        <Button color="dark">
        Dark
        </Button>
        <Button color="black">
        Black
        </Button>
        <Button color="link">
        Link
        </Button>
      </Box>
    </Section>
  )))
  .add('Other Styles', withInfo('Other buttons styles')(() => (
    <Section>
      <Box>
        <Button fullwidth color="primary">
          Full Width
        </Button>
        <Button loading color="info">
          Loading
        </Button>
        <Button outlined color="danger">
          Warning Outlined
        </Button>
        <Button inverted color="success">
          Success Inverted
        </Button>
        <Button disabled color="info">
          Disabled
        </Button>
        <Button renderAs={Link} hrefAttr="to" color="primary" href="http://google.com">
          Custom component
        </Button>
        <Button text>
          Underlined Text Button
        </Button>
        <Button remove />
        <div style={{ background: '#4c4c4c', padding: 20, width: 200, margin: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button inverted outlined type="success">
            Inverted Outlined
          </Button>
        </div>
      </Box>
    </Section>
  )));
