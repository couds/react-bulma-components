import React from 'react';
import { Columns, Notification } from '../..';
import CONSTANTS from './constants';

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

export const Gapless = () => (
  <Columns gapless>
    <Columns.Column>
      <Notification color="primary">No gap</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification>No gap</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="info">No gap</Notification>
    </Columns.Column>
  </Columns>
);

export const BreakpointGaps = () => (
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
);

BreakpointGaps.storyName = 'Breakpoint-based gaps';

export const ProportionalSizes = () => (
  <div>
    {Object.keys(CONSTANTS.SIZES).map((size) => (
      <Columns key={size}>
        <Columns.Column size={CONSTANTS.SIZES[size]}>
          <Notification color="primary">{CONSTANTS.SIZES[size]}</Notification>
        </Columns.Column>
        <Columns.Column>
          <Notification>Auto</Notification>
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

export const Offset = () => (
  <div>
    <Columns>
      <Columns.Column size="half" offset="one-quarter">
        <Notification color="primary">
          <p>
            size: half
            <br />
            offset: one-quarter
          </p>
        </Notification>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column size={4} offset={8}>
        <Notification color="primary">
          <p>
            size: 4
            <br />
            offset: 8
          </p>
        </Notification>
      </Columns.Column>
    </Columns>

    <Columns>
      <Columns.Column size={11} offset={1}>
        <Notification color="primary">
          <p>
            size: 11
            <br />
            offset: 1
          </p>
        </Notification>
      </Columns.Column>
    </Columns>
  </div>
);

export const MobileColumns = () => (
  <Columns breakpoint="mobile">
    <Columns.Column>
      <Notification color="primary">First column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="info">Second column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="warning">Third column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="danger">Fourth column</Notification>
    </Columns.Column>
  </Columns>
);

export const DesktopColumns = () => (
  <Columns breakpoint="desktop">
    <Columns.Column>
      <Notification color="primary">First column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="info">Second column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="warning">Third column</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="danger">Fourth column</Notification>
    </Columns.Column>
  </Columns>
);

export const BreakpointBasedSizes = () => (
  <Columns breakpoint="mobile">
    <Columns.Column
      mobile={{
        size: 'three-quarters',
      }}
      tablet={{
        size: 'two-thirds',
      }}
      desktop={{
        size: 'one-third',
      }}
      widescreen={{
        size: 'half',
      }}
      fullhd={{
        size: 'two-thirds',
      }}
    >
      <Notification color="primary">
        <p>
          is-three-quarters-mobile
          <br />
          is-two-thirds-tablet
          <br />
          is-one-third-desktop
          <br />
          is-half-widescreen
          <br />
          is-two-third-fullhd
        </p>
      </Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification>1</Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification>1</Notification>
    </Columns.Column>
  </Columns>
);

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

export const VerticallyCenteredContent = () => (
  <Columns vCentered>
    <Columns.Column size={8}>
      <Notification>
        <p>First column</p>
      </Notification>
    </Columns.Column>
    <Columns.Column>
      <Notification color="primary">
        <p>
          Second column with more content. This is so you can see the vertical
          alignment.
        </p>
      </Notification>
    </Columns.Column>
  </Columns>
);

export const HorizontallyCenteredContent = () => (
  <Columns centered vCentered>
    <Columns.Column size="half">
      <Notification color="primary">Centered!</Notification>
    </Columns.Column>
  </Columns>
);

export const MultilineColumns = () => (
  <Columns multiline breakpoint="mobile">
    <Columns.Column size="one-quarter">
      <Notification color="primary">First row</Notification>
    </Columns.Column>
    <Columns.Column size="one-quarter">
      <Notification color="primary">First row</Notification>
    </Columns.Column>
    <Columns.Column size="one-quarter">
      <Notification color="primary">First row</Notification>
    </Columns.Column>
    <Columns.Column size="one-quarter">
      <Notification color="primary">First row</Notification>
    </Columns.Column>

    <Columns.Column size="half">
      <Notification color="primary">Second row</Notification>
    </Columns.Column>
    <Columns.Column size="one-quarter">
      <Notification color="primary">Second row</Notification>
    </Columns.Column>
    <Columns.Column size="one-quarter">
      <Notification color="primary">Second row</Notification>
    </Columns.Column>

    <Columns.Column size="one-third">
      <Notification color="primary">Third row</Notification>
    </Columns.Column>
    <Columns.Column size="auto">
      <Notification color="primary">Third row</Notification>
    </Columns.Column>
  </Columns>
);
