import React from 'react';

import { storiesOf } from '@storybook/react';

import { LevelContainer, Level, Item } from '.';

storiesOf('Level', module)
  .add('Default', () => (
    <LevelContainer>
      <Level>
        <Item>
          <p className="bd-notification is-danger">Level content</p>
        </Item>
      </Level>
    </LevelContainer>
  ))
  .add('render as nav', () => (
    <LevelContainer>
      <Level renderAs="nav">
        <Item>
          <p className="bd-notification is-Info">Rendered as a Nav element</p>
        </Item>
      </Level>
    </LevelContainer>
  ))
  .add('render as nav align Right', () => (
    <LevelContainer>
      <Level align="left">
        <Item>
          <p className="bd-notification is-Info">Left Content</p>
        </Item>
      </Level>
      <Level align="right">
        <Item>
          <p className="bd-notification is-success">Right Content</p>
        </Item>
      </Level>
    </LevelContainer>
  ))
  .add('render as nav all items centered', () => (
    <LevelContainer>
      <Item>
        <p className="bd-notification is-Info">Element</p>
      </Item>
      <Item>
        <p className="bd-notification is-Info">Element</p>
      </Item>
      <Item>
        <p className="bd-notification is-Info">Element</p>
      </Item>
      <Item>
        <p className="bd-notification is-Info">Element</p>
      </Item>
    </LevelContainer>
  ))
  .add('render as nav all items centered and keep horizontal on mobile', () => (
    <LevelContainer breakpoint="mobile">
      <Item>
        <p className="bd-notification is-Info">Element</p>
      </Item>
      <Item>
        <p className="bd-notification is-Info">Element</p>
      </Item>
      <Item>
        <p className="bd-notification is-Info">Element</p>
      </Item>
      <Item>
        <p className="bd-notification is-Info">Element</p>
      </Item>
    </LevelContainer>
  ));
