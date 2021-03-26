/* eslint-disable react/prop-types */
import React from 'react';
import { Columns, Notification } from '../../..';
import Box from '../../box';
import CONSTANTS from '../constants';
import GLOBAL_CONSTANTS from '../../../constants';
import Message from '../../message';

const message = (
  <Message color="info">
    <Message.Body>
      Try playing with the viewport option on the top and the breakpoint control
      on the bottom in the Canvas Tab
    </Message.Body>
  </Message>
);

const options = {
  sizes: ['default', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat(
    Object.values(CONSTANTS.SIZES),
  ),
  breakpoints: ['default'].concat(Object.values(GLOBAL_CONSTANTS.BREAKPOINTS)),
};

export const Basic = () => (
  <Columns>
    <Columns.Column>
      <Notification color="primary">First Column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="primary">Second Column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="primary">Third Column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="primary">Fourth Column</Notification>
    </Columns.Column>
  </Columns>
);

export const Sizes = ({ size, narrow, offset }) => (
  <>
    {message}
    <Columns>
      <Columns.Column size={size}>
        <Notification color="primary">Size: {size}</Notification>
      </Columns.Column>
      <Columns.Column>
        <Notification>Auto</Notification>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={2}>
        <Notification>2</Notification>
      </Columns.Column>
      <Columns.Column narrow={narrow} color="primary">
        <Notification>{narrow ? 'Narrow' : 'Flexible'}</Notification>
      </Columns.Column>
    </Columns>
    <Columns>
      <Columns.Column size={4} offset={offset}>
        <Notification color="primary">size: 4 and offset {offset}</Notification>
      </Columns.Column>
    </Columns>
  </>
);

Sizes.args = {
  narrow: false,
};

Sizes.argTypes = {
  size: {
    control: {
      type: 'select',
      options: options.sizes,
    },
    defaultValue: 4,
  },
  offset: {
    control: {
      type: 'select',
      options: options.sizes,
    },
    defaultValue: 4,
  },
};

export const Responsiveness = ({
  mobile,
  tablet,
  desktop,
  widescreen,
  fullhd,
  breakpoint,
}) => (
  <>
    {message}
    <Notification style={{ marginBottom: '1.5rem' }}>
      with <b>breakpoint=&quot;{breakpoint}&quot;</b> the columns will be active
      on all sizes equal or greater than the breakpoint
    </Notification>
    <Box>
      <Columns breakpoint={breakpoint}>
        <Columns.Column
          mobile={mobile}
          tablet={tablet}
          desktop={desktop}
          widescreen={widescreen}
          fullhd={fullhd}
        >
          <Notification color="primary">
            <p>I&apos;m responsive</p>
          </Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="info">Auto</Notification>
        </Columns.Column>
      </Columns>
    </Box>
  </>
);

Responsiveness.args = {
  breakpoint: 'tablet',
  mobile: {
    size: 8,
    offset: 2,
    narrow: false,
  },
  tablet: {
    size: 6,
    offset: 3,
    narrow: false,
  },
  desktop: {
    size: 4,
    offset: 4,
    narrow: false,
  },
  widescreen: {
    size: 2,
    offset: 5,
    narrow: false,
  },
  fullhd: {
    size: 3,
    offset: 0,
    narrow: false,
  },
};

Responsiveness.argTypes = {
  breakpoint: {
    control: {
      type: 'select',
      options: options.breakpoints,
    },
  },
};

export const Nesting = () => (
  <Columns>
    <Columns.Column>
      <Notification color="primary">0</Notification>
      <Columns>
        <Columns.Column>
          <Notification color="info">1</Notification>
          <Columns>
            <Columns.Column size="half">
              <Notification color="danger">2</Notification>
            </Columns.Column>
            <Columns.Column size="half">
              <Notification color="danger">2</Notification>
            </Columns.Column>
          </Columns>
        </Columns.Column>
        <Columns.Column>
          <Notification color="info">1</Notification>
        </Columns.Column>
      </Columns>
    </Columns.Column>
    <Columns.Column>
      <Notification color="primary">0</Notification>
      <Columns>
        <Columns.Column size="two-thirds">
          <Notification color="info">1</Notification>
        </Columns.Column>
        <Columns.Column size="one-third">
          <Notification color="info">1</Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification color="info">1</Notification>
        </Columns.Column>
      </Columns>
    </Columns.Column>
  </Columns>
);

export const Gaps = ({ gapless }) => (
  <>
    {message}
    <Columns
      gapless={gapless}
      variableGap={{
        mobile: 1,
        tablet: 0,
        desktop: 3,
        widescreen: 8,
        fullhd: 2,
      }}
    >
      <Columns.Column size={3}>
        <Notification color="primary">Size 1</Notification>
      </Columns.Column>
      <Columns.Column size={3}>
        <Notification color="primary">Size 1</Notification>
      </Columns.Column>
      <Columns.Column size={3}>
        <Notification color="primary">Size 1</Notification>
      </Columns.Column>
      <Columns.Column size={3}>
        <Notification color="primary">Size 1</Notification>
      </Columns.Column>
    </Columns>
  </>
);

Gaps.args = {
  gapless: false,
};

export const Options = ({ vCentered, centered, multiline }) => (
  <>
    {message}
    <Columns vCentered={vCentered} centered={centered} multiline={multiline}>
      <Columns.Column size={7}>
        <Notification>
          <p>7</p>
        </Notification>
      </Columns.Column>
      <Columns.Column size={5}>
        <Notification>
          <p style={{ minHeight: '3rem' }}>5</p>
        </Notification>
      </Columns.Column>
      <Columns.Column size={3}>
        <Notification color="success">3</Notification>
      </Columns.Column>
      <Columns.Column size={4}>
        <Notification color="success">4</Notification>
      </Columns.Column>
      <Columns.Column size={3}>
        <Notification color="success">3</Notification>
      </Columns.Column>
      <Columns.Column narrow>
        <Notification color="info">Narrow Column</Notification>
      </Columns.Column>
      <Columns.Column narrow>
        <Notification color="info">Narrow Column</Notification>
      </Columns.Column>
      <Columns.Column narrow>
        <Notification color="info">Narrow Column</Notification>
      </Columns.Column>
      <Columns.Column narrow>
        <Notification color="info">Narrow Column</Notification>
      </Columns.Column>
      <Columns.Column size={4}>
        <Notification color="info">4</Notification>
      </Columns.Column>
    </Columns>
  </>
);

Options.args = {
  vCentered: false,
  centered: false,
  multiline: true,
};
