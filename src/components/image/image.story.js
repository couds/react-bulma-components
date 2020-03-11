import React from 'react';

import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Image from 'react-bulma-components/lib/components/image';
import CONSTANTS from './constants';
import Table from 'react-bulma-components/lib/components/table';

storiesOf('Image', module)
  .add('Default', () => (
    <div style={{ width: 320 }}>
      <Image
        fullwidth={boolean('fullwidth', false)}
        rounded={boolean('rounded', false)}
        src="http://bulma.io/images/placeholders/640x480.png"
        size="3by2"
      />
    </div>
  ))
  .add('Fixed Square', () => (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Size</th>
          <th>Image</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {CONSTANTS.SIZES.filter(size => typeof size === 'number').map(size => (
          <tr key={size}>
            <td />
            <td style={{ width: 100 }}>{size}</td>
            <td style={{ width: 128 }}>
              <Image
                src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original"
                size={size}
              />
            </td>
            <td />
          </tr>
        ))}
      </tbody>
    </Table>
  ))
  .add('Responsive images with ratios', () => (
    <Table>
      <thead>
        <tr>
          <th />
          <th>Size</th>
          <th>Image</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {CONSTANTS.SIZES.filter(size => typeof size === 'string').map(size => (
          <tr key={size}>
            <td />
            <td style={{ width: 100 }}>{size}</td>
            <td style={{ width: 128 }}>
              <Image
                src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original"
                size={size}
              />
            </td>
            <td />
          </tr>
        ))}
      </tbody>
    </Table>
  ));
