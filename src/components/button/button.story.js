import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import readme from './readme.md';

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
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <Section>
      <Box>
        <Button
          color={select('Color', {
            '': 'default',
            primary: 'primary',
            success: 'success',
            info: 'info',
            warning: 'warning',
            danger: 'danger',
            light: 'light',
            dark: 'dark',
            white: 'white',
            black: 'black',
            link: 'link',
          }, '')}
          state={select('State', {
            '': 'default',
            hovered: 'hovered',
            focused: 'focused',
            active: 'active',
          }, '')}
          size={select('Size', {
            '': 'Default',
            small: 'Small',
            medium: 'Medium',
            large: 'Large',
          }, '')}
          outlined={boolean('Outlined', false)}
          inverted={boolean('Inverted', false)}
          fullwidth={boolean('FullWidth', false)}
          disabled={boolean('Disabled', false)}
          remove={boolean('Remove', false)}
          isStatic={boolean('Static', false)}
          loading={boolean('Loading', false)}
        >
          Text of the Button
        </Button>
      </Box>
    </Section>
  )));
