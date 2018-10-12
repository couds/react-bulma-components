import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Button from 'react-bulma-components/lib/components/button';
import Buttons from 'react-bulma-components/lib/components/buttons';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';

const positions = {
  Default: '',
  centered: 'centered',
  right: 'right'
};

storiesOf('Buttons', module)
  .addDecorator(story => (
    <div className="button-display">
      {story()}
    </div>
  ))
  .add('Default', (() => (
    <Section>
      <Buttons position={select('Position', positions)}>
        <Button
          renderAs="span"
          color="success"
        >
          Save changes
        </Button>
        <Button
          renderAs="span"
          color="info"
        >
          Save and continue
        </Button>
        <Button
          renderAs="span"
          color="danger"
        >
          Cancel
        </Button>
      </Buttons>
    </Section>
  )))
  .add('Groupped buttons', (() => (
    <Section>
      <Buttons
        hasAddons
        position={select('Position', positions)}
      >
          <Button
            renderAs="span"
            isSelected
            color="success"
          >
            Yes
          </Button>
          <Button renderAs="span">Maybe</Button>
          <Button renderAs="span">No</Button>
      </Buttons>
      <Buttons
        hasAddons
        position={select('Position', positions)}
      >
          <Button renderAs="span">Yes</Button>
          <Button
            renderAs="span"
            isSelected
            color="info"
          >
            Maybe
          </Button>
          <Button renderAs="span">No</Button>
      </Buttons>
      <Buttons
        hasAddons
        position={select('Position', positions)}
      >
          <Button renderAs="span">Yes</Button>
          <Button renderAs="span">Maybe</Button>
          <Button
            renderAs="span"
            isSelected
            color="danger"
          >
            No
          </Button>
      </Buttons>
    </Section>
  )));
