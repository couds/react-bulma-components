import React from 'react';

import CodeExample from 'components/code-example';

import Box from 'react-bulma-components/lib/components/box';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

import { MediaProps, MediaItemProps } from './props';
import MediaCommentDemo from './demo/media-comment';
import MediaPostDemo from './demo/media-post';
import MediaNestedDemo from './demo/media-nested';
import PropsTable from '../../../components/props-table';

const MediaDoc = () => (
  <Container fluid>
    <Heading renderAs="h1">Media Object</Heading>
    <Heading subtitle size={4} renderAs="h4">
      The famous <strong>media object</strong> prevalent in social media
      interfaces, but useful in any context
    </Heading>
    <Box paddingless>
      <CodeExample
        alignment="vertical"
        reactCode={MediaPostDemo.reactCode}
        bulmaCode={MediaPostDemo.bulmaCode}
      >
        <MediaPostDemo />
      </CodeExample>
    </Box>
    <Content>
      <p>
        You can include <em>any</em> other Bulma components like Buttons and
        Icons
      </p>
    </Content>
    <Box paddingless>
      <CodeExample
        alignment="vertical"
        reactCode={MediaCommentDemo.reactCode}
        bulmaCode={MediaCommentDemo.bulmaCode}
      >
        <MediaCommentDemo />
      </CodeExample>
    </Box>
    <Heading size={4}>Nesting</Heading>
    <Content>
      <p>You can nest media objects up to 3 levels deep</p>
    </Content>
    <Box paddingless>
      <CodeExample
        alignment="vertical"
        reactCode={MediaNestedDemo.reactCode}
        bulmaCode={MediaNestedDemo.bulmaCode}
      >
        <MediaNestedDemo />
      </CodeExample>
    </Box>
    <hr />
    <Heading size={4}>Props</Heading>
    <Heading size={5}>Media</Heading>
    <PropsTable componentProps={MediaProps} />
    <br />
    <Heading size={5}>Media.Item</Heading>
    <PropsTable componentProps={MediaItemProps} />
    <br />
  </Container>
);

export default MediaDoc;
