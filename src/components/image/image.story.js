import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Image from '.';
import Content from '../content';

storiesOf('Image', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo()(() => (
    <div style={{ width: 320 }}>
      <Image src="http://bulma.io/images/placeholders/640x480.png" size="3by2" />
    </div>
  )))
  .add('Fixed Square', withInfo()(() => (
    <Content>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>16</td>
            <td><Image src="http://bulma.io/images/placeholders/128x128.png" size={16} /></td>
          </tr>
          <tr>
            <td>24</td>
            <td><Image src="http://bulma.io/images/placeholders/128x128.png" size={24} /></td>
          </tr>
          <tr>
            <td>32</td>
            <td><Image src="http://bulma.io/images/placeholders/128x128.png" size={32} /></td>
          </tr>
          <tr>
            <td>48</td>
            <td><Image src="http://bulma.io/images/placeholders/128x128.png" size={48} /></td>
          </tr>
          <tr>
            <td>64</td>
            <td><Image src="http://bulma.io/images/placeholders/128x128.png" size={64} /></td>
          </tr>
          <tr>
            <td>96</td>
            <td><Image src="http://bulma.io/images/placeholders/128x128.png" size={96} /></td>
          </tr>
          <tr>
            <td>128</td>
            <td><Image src="http://bulma.io/images/placeholders/128x128.png" size={128} /></td>
          </tr>
        </tbody>
      </table>
    </Content>
  )))
  .add('Responsive images with ratios', withInfo()(() => (
    <Content>
      <table>
        <thead>
          <tr>
            <th>Ratio</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>square</td>
            <td><Image src="http://bulma.io/images/placeholders/480x480.png" size="square" /></td>
          </tr>
          <tr>
            <td>1by1</td>
            <td><Image src="http://bulma.io/images/placeholders/480x480.png" size="1by1" /></td>
          </tr>
          <tr>
            <td>4by3</td>
            <td><Image src="http://bulma.io/images/placeholders/640x480.png" size="4by3" /></td>
          </tr>
          <tr>
            <td>3by2</td>
            <td><Image src="http://bulma.io/images/placeholders/480x320.png" size="3by2" /></td>
          </tr>
          <tr>
            <td>16by9</td>
            <td><Image src="http://bulma.io/images/placeholders/640x360.png" size="16by9" /></td>
          </tr>
          <tr>
            <td>2by1</td>
            <td><Image src="http://bulma.io/images/placeholders/640x320.png" size="2by1" /></td>
          </tr>
        </tbody>
      </table>
    </Content>
  )));
