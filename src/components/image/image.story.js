import React from 'react';

import { storiesOf } from '@storybook/react';

import Image from '.';

storiesOf('Image', module)
  .add('Default', () => (
    <div style={{ width: 320 }}>
      <Image src="http://bulma.io/images/placeholders/640x480.png" size="3by2" />
    </div>
  ));
