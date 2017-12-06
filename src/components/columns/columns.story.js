import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import readme from './readme.md';

import Columns from '.';
import Box from '../box';
import Heading from '../heading';

storiesOf('Columns', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
    <Columns>
      <Columns.Column>
        <p className="bd-notification is-success">First Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-info">Second Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning">Third Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning">Fourth Column</p>
      </Columns.Column>
    </Columns>
  )))
  .add('Sizes by name', withReadme(readme, () => (
    <div>
      <Columns>
        <Columns.Column size="three-quarters">
          <p className="bd-notification is-success">is-three-quarters</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-info">Auto</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-warning">Auto</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="two-thirds">
          <p className="bd-notification is-success">is-two-thirds</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-info">Auto</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-warning">Auto</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="half">
          <p className="bd-notification is-success">is-half</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-info">Auto</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-warning">Auto</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="one-third">
          <p className="bd-notification is-success">is-one-thirds</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-info">Auto</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-warning">Auto</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size="one-quarter">
          <p className="bd-notification is-success">is-one-quarter</p>
        </Columns.Column>
        <Columns.Column >
          <p className="bd-notification is-info">Auto</p>
        </Columns.Column>
      </Columns>
    </div>
  )))
  .add('Sizes by 12 Columns', withReadme(readme, () => (
    <div>
      <Columns>
        <Columns.Column size={1}>
          <p className="bd-notification is-success">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-info">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-warning">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size={2}>
          <p className="bd-notification is-success">size-2</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-warning">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size={3}>
          <p className="bd-notification is-success">size-3</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>

      <Columns>
        <Columns.Column size={4}>
          <p className="bd-notification is-success">size-4</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={5}>
          <p className="bd-notification is-success">size-5</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={6}>
          <p className="bd-notification is-success">size-6</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={7}>
          <p className="bd-notification is-success">size-7</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-black">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={8}>
          <p className="bd-notification is-success">size-8</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-dark">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={9}>
          <p className="bd-notification is-success">size-9</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-light">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={10}>
          <p className="bd-notification is-success">size-10</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-white">size-1</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={11}>
          <p className="bd-notification is-success">size-11</p>
        </Columns.Column>
        <Columns.Column size={1}>
          <p className="bd-notification is-danger">size-1</p>
        </Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={12}>
          <p className="bd-notification is-success">size-12</p>
        </Columns.Column>
      </Columns>
    </div>
  )))
  .add('With Offset', withReadme(readme, () => (
    <div>
      <Columns mobile>
        <Columns.Column size="half" offset="one-quarter">
          <p className="bd-notification is-info">size half<br />offset one-quarter</p>
        </Columns.Column>
      </Columns>

      <Columns mobile>
        <Columns.Column size={4} offset={8}>
          <p className="bd-notification is-info">size 4<br />offset 8</p>
        </Columns.Column>
      </Columns>

      <Columns mobile>
        <Columns.Column size={11} offset={1}>
          <p className="bd-notification is-info">size 11<br />offset 1</p>
        </Columns.Column>
      </Columns>
    </div>
  )))
  .add('Narrow', withReadme(readme, () => (
    <Columns>
      <Columns.Column narrow>
        <Box style={{ width: 200 }}>
          <Heading size={5} renderAs="p">Narrow column</Heading>
          <Heading subtitle renderAs="p">This column is only 200px wide.</Heading>
        </Box>
      </Columns.Column>
      <Columns.Column>
        <Box>
          <Heading size={5} renderAs="p">Flexible column</Heading>
          <Heading subtitle renderAs="p">This column will take up the remaining space available.</Heading>
        </Box>
      </Columns.Column>
    </Columns>
  )))
  .add('Responsive', withReadme(readme, () => (
    <div>
      <Box>
        <Heading size={5} renderAs="p">Mobile</Heading>
        <Columns breakpoint="mobile">
          <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Third Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Fourth Column</p>
          </Columns.Column>
        </Columns>
      </Box>
      <Box>
        <Heading renderAs="p" size={5}>Tablet</Heading>
        <Columns breakpoint="tablet">
          <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Third Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Fourth Column</p>
          </Columns.Column>
        </Columns>
      </Box>
      <Box>
        <Heading renderAs="p" size={5}>Desktop</Heading>
        <Columns breakpoint="desktop">
          <Columns.Column>
            <p className="bd-notification is-success">First Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-info">Second Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Third Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Fourth Column</p>
          </Columns.Column>
        </Columns>
      </Box>
    </div>
  )))
  .add('Different column size per breakpoint', withReadme(readme, () => (
    <Columns breakpoint="mobile">
      <Columns.Column
        mobile={{
          size: 'three-quarters',
        }}
        tablet={{
          size: 'two-thirds',
        }}
        desktop={{
          size: 'half',
        }}
        widescreen={{
          size: 'one-third',
        }}
        fullhd={{
          size: 'one-quarter',
        }}
      >
        <p className="bd-notification is-success">
          is-three-quarters-mobile<br />
          is-two-thirds-tablet<br />
          is-half-desktop
          is-one-third-widescreen
          is-one-quarter-fullhd
        </p>
      </Columns.Column>
      <Columns.Column className="column">
        <p className="bd-notification is-info">1</p>
      </Columns.Column>
      <Columns.Column className="column">
        <p className="bd-notification is-warning">1</p>
      </Columns.Column>
    </Columns>
  )))
  .add('Nested', withReadme(readme, () => (
    <Columns>
      <Columns.Column size="half">
        <p className="bd-notification is-success">First Column</p>
        <Columns>
          <Columns.Column size="one-third">
            <p className="bd-notification is-info">First Nested Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Second Nested Column (auto)</p>
          </Columns.Column>
        </Columns>
      </Columns.Column>
      <Columns.Column size="half">
        <p className="bd-notification is-success">Second Column</p>
        <Columns>
          <Columns.Column size="half">
            <p className="bd-notification is-info">First Nested Column (Half)</p>
          </Columns.Column>
          <Columns.Column size="one-quarter">
            <p className="bd-notification is-warning">Second Nested Column (one-quarter)</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">Third Nested Column (auto)</p>
          </Columns.Column>
        </Columns>
      </Columns.Column>
    </Columns>
  )))
  .add('gapless columns', withReadme(readme, () => (
    <Columns gapless>
      <Columns.Column>
        <p className="bd-notification is-success"> First Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-info"> Middle Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning"> Last Column</p>
      </Columns.Column>
    </Columns>
  )));
