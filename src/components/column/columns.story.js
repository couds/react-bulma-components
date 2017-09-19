import React from 'react';

import { storiesOf } from '@storybook/react';

import Columns from '.';

storiesOf('Columns', module)
  .add('Three columns with text', () => (
    <Columns>
      <Columns.Column notification>
        <p className="bd-notification is-success"> First Column</p>
      </Columns.Column>
      <Columns.Column notification type="info" >
        <p className="bd-notification is-info"> Middle Column</p>
      </Columns.Column>
      <Columns.Column notification type="warning" >
        <p className="bd-notification is-warning"> Last Column</p>
      </Columns.Column>
    </Columns>
  ))
  .add('Three Columns with One is half of the width', () => (
    <Columns>
      <Columns.Column>
        <p className="bd-notification is-success"> First Column</p>
      </Columns.Column>
      <Columns.Column size={Columns.CONSTANTS.SIZES.HALF}>
        <p className="bd-notification is-info"> Large Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning"> Last Column</p>
      </Columns.Column>
    </Columns>
  ))
  .add('One Column centered using offset', () => (
    <Columns>
      <Columns.Column
        offset={Columns.CONSTANTS.SIZES.ONEQUARTER}
        size={Columns.CONSTANTS.SIZES.HALF}
      >
        <p className="bd-notification is-success">{'I\'m centered'}</p>
      </Columns.Column>
    </Columns>
  ))
  .add('One really big columns and other that fill the gap', () => (
    <Columns>
      <Columns.Column size={9}>
        <p className="bd-notification is-success">Really large</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-info">{'I\'m small'}</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-danger">Me Too</p>
      </Columns.Column>
    </Columns>
  ))
  .add('One column that use the neccesary space, other that fill the gap', () => (
    <Columns>
      <Columns.Column narrow>
        <p className="bd-notification is-info" style={{ width: 200 }}>
          {'I\'m fix to 200PX'}
        </p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-success">I use the available space</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-danger">I share the space also</p>
      </Columns.Column>
    </Columns>
  ))
  .add('One column that use the neccesary space with breakpoint, other that fill the gap', () => (
    <Columns>
      <Columns.Column narrow="desktop" >
        <p className="bd-notification is-success" style={{ width: 150 }}>
          150PX on Desktop only
        </p>
      </Columns.Column>
      <Columns.Column size={2}>
        <p className="bd-notification is-info">I use 1/6 of the space</p>
      </Columns.Column>
      <Columns.Column size={2}>
        <p className="bd-notification is-warning">Me too!!</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-danger">I use the remainging space</p>
      </Columns.Column>
    </Columns>
  ))
  .add('gapless columns', () => (
    <Columns gapless>
      <Columns.Column notification>
        <p className="bd-notification is-success"> First Column</p>
      </Columns.Column>
      <Columns.Column notification type="info" >
        <p className="bd-notification is-info"> Middle Column</p>
      </Columns.Column>
      <Columns.Column notification type="warning" >
        <p className="bd-notification is-warning"> Last Column</p>
      </Columns.Column>
    </Columns>
  ));
