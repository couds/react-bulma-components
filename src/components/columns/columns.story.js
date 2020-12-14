import React from 'react';
import { storiesOf } from '@storybook/react';
import { Columns, Box, Heading, Notification } from '../..';
import CONSTANTS from './constants';

export const Basic = () => (
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
);

export const FractionSizes = () => (
  <div>
    {Object.keys(CONSTANTS.SIZES).map((size) => (
      <Columns key={size}>
        <Columns.Column size={CONSTANTS.SIZES[size]}>
          <p className="bd-notification is-success">{CONSTANTS.SIZES[size]}</p>
        </Columns.Column>
        <Columns.Column>
          <p className="bd-notification is-info">Auto</p>
        </Columns.Column>
      </Columns>
    ))}
  </div>
);

export const TwelveColumns = () => (
  <div>
    <Columns>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column size={4}>
        <Notification color="primary">4</Notification>
      </Columns.Column>
      <Columns.Column size={4}>
        <Notification color="primary">4</Notification>
      </Columns.Column>
      <Columns.Column size={4}>
        <Notification color="primary">4</Notification>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column size={2}>
        <Notification color="primary">2</Notification>
      </Columns.Column>
      <Columns.Column size={7}>
        <Notification color="primary">7</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
      <Columns.Column size={1}>
        <Notification color="primary">1</Notification>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column size={3}>
        <Notification color="primary">3</Notification>
      </Columns.Column>
      <Columns.Column size={3}>
        <Notification color="primary">3</Notification>
      </Columns.Column>
      <Columns.Column>
        <Notification color="info">auto</Notification>
      </Columns.Column>
    </Columns>
  </div>
);

storiesOf('Columns', module)
  .add('With Offset', () => (
    <div>
      <Columns mobile>
        <Columns.Column size="half" offset="one-quarter">
          <p className="bd-notification is-info">
            size half
            <br />
            offset one-quarter
          </p>
        </Columns.Column>
      </Columns>

      <Columns mobile>
        <Columns.Column size={4} offset={8}>
          <p className="bd-notification is-info">
            size 4<br />
            offset 8
          </p>
        </Columns.Column>
      </Columns>

      <Columns mobile>
        <Columns.Column size={11} offset={1}>
          <p className="bd-notification is-info">
            size 11
            <br />
            offset 1
          </p>
        </Columns.Column>
      </Columns>
    </div>
  ))
  .add('Narrow', () => (
    <Columns>
      <Columns.Column narrow>
        <Box style={{ width: 200 }}>
          <Heading size={5} renderAs="p">
            Narrow column
          </Heading>
          <Heading subtitle renderAs="p">
            This column is only 200px wide.
          </Heading>
        </Box>
      </Columns.Column>
      <Columns.Column>
        <Box>
          <Heading size={5} renderAs="p">
            Flexible column
          </Heading>
          <Heading subtitle renderAs="p">
            This column will take up the remaining space available.
          </Heading>
        </Box>
      </Columns.Column>
    </Columns>
  ))
  .add('Responsive', () => (
    <div>
      <Box>
        <Heading size={5} renderAs="p">
          Mobile
        </Heading>
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
        <Heading renderAs="p" size={5}>
          Tablet
        </Heading>
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
        <Heading renderAs="p" size={5}>
          Desktop
        </Heading>
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
  ))
  .add('Different column size per breakpoint', () => (
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
          is-three-quarters-mobile
          <br />
          is-two-thirds-tablet
          <br />
          is-half-desktop is-one-third-widescreen is-one-quarter-fullhd
        </p>
      </Columns.Column>
      <Columns.Column className="column">
        <p className="bd-notification is-info">1</p>
      </Columns.Column>
      <Columns.Column className="column">
        <p className="bd-notification is-warning">1</p>
      </Columns.Column>
    </Columns>
  ))
  .add('Nested', () => (
    <Columns>
      <Columns.Column size="half">
        <p className="bd-notification is-success">First Column</p>
        <Columns>
          <Columns.Column size="one-third">
            <p className="bd-notification is-info">First Nested Column</p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">
              Second Nested Column (auto)
            </p>
          </Columns.Column>
        </Columns>
      </Columns.Column>
      <Columns.Column size="half">
        <p className="bd-notification is-success">Second Column</p>
        <Columns>
          <Columns.Column size="half">
            <p className="bd-notification is-info">
              First Nested Column (Half)
            </p>
          </Columns.Column>
          <Columns.Column size="one-quarter">
            <p className="bd-notification is-warning">
              Second Nested Column (one-quarter)
            </p>
          </Columns.Column>
          <Columns.Column>
            <p className="bd-notification is-warning">
              Third Nested Column (auto)
            </p>
          </Columns.Column>
        </Columns>
      </Columns.Column>
    </Columns>
  ))
  .add('gapless columns', () => (
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
  ))
  .add('Variable Gap', () => (
    <Columns
      variableGap={{
        mobile: 1,
        tablet: 0,
        desktop: 3,
        widescreen: 8,
        fullhd: 2,
      }}
    >
      <Columns.Column size={3}>
        <p className="bd-notification is-dark">size-1</p>
      </Columns.Column>
      <Columns.Column size={3}>
        <p className="bd-notification is-light">size-1</p>
      </Columns.Column>
      <Columns.Column size={3}>
        <p className="bd-notification is-white">size-1</p>
      </Columns.Column>
      <Columns.Column size={3}>
        <p className="bd-notification is-danger">size-1</p>
      </Columns.Column>
    </Columns>
  ))
  .add('Vertical alignment', () => (
    <Columns vCentered>
      <Columns.Column size={8}>
        <p className="bd-notification is-primary">First column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-primary">
          Second column with more content. This is so you can see the vertical
          alignment.
        </p>
      </Columns.Column>
    </Columns>
  ));
