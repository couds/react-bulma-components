import React from 'react';
import Box from 'react-bulma-components/lib/components/box';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

import CodeExample from 'components/code-example';

import { LevelProps, LevelSideProps, LevelItemProps } from './props';
import LevelNavDemo from './demo/level-nav';
import LevelLinksDemo from './demo/level-links';
import LevelMobile from './demo/level-mobile';
import PropsTable from '../../../components/props-table';
import SocialMediaLevelDemo from './demo/level-social-media';

const LevelDoc = () => (
  <Container fluid>
    <Heading renderAs="h1">Level</Heading>
    <Heading subtitle size={4} renderAs="h4">
      A multi-purpose
      <strong> horizontal level</strong>, which can contain almost any other
      element
    </Heading>
    <Content>
      <p>
        The structure of a level is as follows:
        <ul>
          <li>
            <code>{'<Level>'}</code>: main container
          </li>
          <ul>
            <li>
              <code>{'<Level.Side align="left">'}</code> for the left side
            </li>
            <li>
              <code>{'<Level.Side align="right">'}</code> for the right side
            </li>
            <ul>
              <code>{'<Level.Item>'}</code> for each individual element
            </ul>
          </ul>
        </ul>
      </p>
      <p>
        You can insert almost anything in a <code>level-item</code>, like title,
        button, text input, etc. Any element that is put inside{' '}
        <code>{'<Level>'}</code> will always be
        <strong> vertically centered</strong>.
      </p>
      <Box paddingless>
        <CodeExample
          alignment="vertical"
          reactCode={LevelNavDemo.reactCode}
          bulmaCode={LevelNavDemo.bulmaCode}
        >
          <LevelNavDemo />
        </CodeExample>
      </Box>
      <hr />
      <Heading size={4}>Centered Level</Heading>
      <Box paddingless>
        <CodeExample
          alignment="vertical"
          reactCode={SocialMediaLevelDemo.reactCode}
          bulmaCode={SocialMediaLevelDemo.bulmaCode}
        >
          <SocialMediaLevelDemo />
        </CodeExample>
      </Box>
      <br />
      <Box paddingless>
        <CodeExample
          alignment="vertical"
          reactCode={LevelLinksDemo.reactCode}
          bulmaCode={LevelLinksDemo.bulmaCode}
        >
          <LevelLinksDemo />
        </CodeExample>
      </Box>
      <br />
      <Heading size={4}>Mobile Level</Heading>
      <Box paddingless>
        <CodeExample
          alignment="vertical"
          reactCode={LevelMobile.reactCode}
          bulmaCode={LevelMobile.bulmaCode}
        >
          <LevelMobile />
        </CodeExample>
      </Box>
    </Content>
    <Heading size={4}>Props</Heading>
    <Heading size={5}>Level</Heading>
    <PropsTable componentProps={LevelProps} />
    <br />
    <Heading size={5}>Level.Side</Heading>
    <PropsTable componentProps={LevelSideProps} />
    <br />
    <Heading size={5}>Level.Item</Heading>
    <PropsTable componentProps={LevelItemProps} />
    <br />
  </Container>
);

export default LevelDoc;
