import React from 'react';
import Box from 'react-bulma-components/lib/components/box';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Notification from 'react-bulma-components/lib/components/notification';

import CodeExample from 'components/code-example';
import ContainerProps from './props';
import PropsTable from '../../../components/props-table';

const ContainerDoc = () => (
  <Container fluid>
    <Heading renderAs="h1">Container</Heading>
    <Heading subtitle size={4} renderAs="h4">
      A simple container to center your content horizontally
    </Heading>
    <Content>
      <p>
        The
        <code>Container</code>
        component can be used in any context, but mostly as a{' '}
        <strong>direct child </strong>
        of either:
      </p>
      <ul>
        <li>
          <code>NavBar</code>
        </li>
        <li>
          <code>Hero</code>
        </li>
        <li>
          <code>Section</code>
        </li>
        <li>
          <code>Footer</code>
        </li>
      </ul>
    </Content>
    <br />
    <Heading size={4}>Default</Heading>
    <Box paddingless>
      <CodeExample
        alignment="vertical"
        reactCode={`
<Container>
  <Notification>
    This container is <strong>centered</strong> on desktop
  </Notification>
</Container>
`}
        bulmaCode={`
<div class="container">
  <div class="notification">
    This container is <strong>centered</strong> on desktop
  </div>
</div>
`}
      >
        <Container>
          <Notification>
            This container is <strong>centered</strong> on desktop
          </Notification>
        </Container>
      </CodeExample>
    </Box>
    <hr />
    <Heading size={4}>Fluid</Heading>
    <Box paddingless>
      <CodeExample
        alignment="vertical"
        reactCode={`
<Container fluid>
  <Notification>
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
  </Notification>
</Container>
	`}
        bulmaCode={`
<div class="container is-fluid">
  <div class="notification">
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size. 
  </div>
</div>
`}
      >
        <Container fluid>
          <Notification>
            This container is <strong>centered</strong> on desktop
          </Notification>
        </Container>
      </CodeExample>
    </Box>
    <hr />
    <Heading size={4}>Breakpoint containers</Heading>
    <Box paddingless>
      <CodeExample
        alignment="vertical"
        reactCode={`
<Container breakpoint="widescreen">
	<Notification>
		This container is <strong>fullwidth</strong> until the <code>$widescreen</code> breakpoint
	</Notification>
</Container>
					`}
        bulmaCode={`
<div class="container is-widescreen">
  <div class="notification">
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
  </div>
</div>
					`}
      >
        <Container breakpoint="widescreen">
          <Notification>
            This container is <strong>fullwidth</strong> <em>until</em> the
            <code>$widescreen</code>
            breakpoint
          </Notification>
        </Container>
      </CodeExample>
    </Box>
    <br />
    <Box paddingless>
      <CodeExample
        alignment="vertical"
        reactCode={`
<Container breakpoint="fullhd">
	<Notification>
		This container is <strong>fullwidth</strong> until the <code>$fullhd</code> breakpoint
	</Notification>
</Container>
					`}
        bulmaCode={`
<div class="container is-fullhd">
  <div class="notification">
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
  </div>
</div>
					`}
      >
        <Container breakpoint="fullhd">
          <Notification>
            This container is <strong>fullwidth</strong> <em>until</em> the
            <code>$fullhd</code>
            breakpoint
          </Notification>
        </Container>
      </CodeExample>
    </Box>
    <hr />
    <Heading size={4}>Props</Heading>
    <PropsTable props={ContainerProps} />
    <br />
  </Container>
);

export default ContainerDoc;
