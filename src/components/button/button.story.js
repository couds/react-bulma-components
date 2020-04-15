import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';
import CONSTANTS from '../../constants';

const positions = {
  default: '',
  centered: 'centered',
  right: 'right',
};

storiesOf('Button', module)
  .addDecorator(story => <div className="button-display">{story()}</div>)
  .add('Default', () => (
    <Section>
      <Box>
        Play with the button props using the knobs addon panel at the bottom
      </Box>
      <Button
        colorVariant={select('Color variant', CONSTANTS.COLOR_VARIANT)}
        fullwidth={boolean('Full width', false)}
        color={select('Color', { ...CONSTANTS.COLORS, default: '' })}
        loading={boolean('Loading', false)}
        outlined={boolean('Outlined', false)}
        inverted={boolean('Inverted', false)}
        disabled={boolean('Disabled', false)}
        text={boolean('Text', false)}
        remove={boolean('Remove', false)}
        isStatic={boolean('Static', false)}
        rounded={boolean('Rounded', false)}
        onClick={action('Button Click')}
        onMouseEnter={action('Hover')}
      >
        Button
      </Button>
    </Section>
  ))
  .add('As another React element', () => {
    const CustomComponent = ({ customProp, children, className }) => (
      <a className={className} href={customProp}>
        {children}
      </a>
    );

    CustomComponent.propTypes = {
      customProp: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    };

    return (
      <Section>
        <Button
          color="info"
          renderAs={CustomComponent}
          customProp="https://github.com/couds/react-bulma-components"
        >
          Button rendered using another React Component with props
        </Button>
      </Section>
    );
  })
  .add('Button group', () => (
    <Section>
      <Button.Group
        hasAddons={boolean('hasAddons', false)}
        position={select('Position', positions)}
        size={select('Size', {
          small: 'small',
          medium: 'medium',
          large: 'large',
        })}
      >
        <Button renderAs="span" color="success">
          Save changes
        </Button>
        <Button renderAs="span" color="info">
          Save and continue
        </Button>
        <Button renderAs="span" color="danger">
          Cancel
        </Button>
      </Button.Group>
    </Section>
  ))
  .add('Ref forwarding', () => {
    const ref = React.createRef();

    return (
      <Section>
        <Button onClick={() => ref.current.click()}>click other button</Button>
        <Button ref={ref} onClick={() => console.log('clicked')}>
          this will be clicked
        </Button>
      </Section>
    );
  });
