import React from 'react';
import Button from 'react-bulma-components/lib/components/button';
import Container from 'react-bulma-components/lib/components/container';
import {
  Control,
  Field,
  Input,
} from 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import Level from 'react-bulma-components/lib/components/level';

const LevelNavDemo = () => (
  <Container fluid breakpoint="fullhd">
    <Level renderAs="nav">
      <Level.Side align="left">
        <Level.Item>
          <Heading size={5} subtitle>
            <strong>123</strong> posts
          </Heading>
        </Level.Item>
        <Level.Item>
          <Field kind="addons">
            <Control>
              <Input placeholder="Find a post" />
            </Control>
            <Control>
              <Button renderAs="button">Search</Button>
            </Control>
          </Field>
        </Level.Item>
      </Level.Side>

      <Level.Side align="right">
        <Level.Item>
          <strong>All</strong>
        </Level.Item>
        <Level.Item>
          <a>Published</a>
        </Level.Item>
        <Level.Item>
          <a>Drafts</a>
        </Level.Item>
        <Level.Item>
          <a>Deleted</a>
        </Level.Item>
        <Level.Item>
          <Button renderAs="a" color="success">
            New
          </Button>
        </Level.Item>
      </Level.Side>
    </Level>
  </Container>
);

LevelNavDemo.reactCode = `<Level renderAs="nav">
  <Level.Side align="left">
    <Level.Item>
      <Heading size={5} subtitle>
        <strong>123</strong> posts
      </Heading>
    </Level.Item>
    <Level.Item>
      <Field kind="addons">
        <Control>
          <Input placeholder="Find a post" />
        </Control>
        <Control>
          <Button renderAs="button">Search</Button>
        </Control>
      </Field>
    </Level.Item>
  </Level.Side>

  <Level.Side align="right">
    <Level.Item>
      <strong>All</strong>
    </Level.Item>
    <Level.Item>
      <a>Published</a>
    </Level.Item>
    <Level.Item>
      <a>Drafts</a>
    </Level.Item>
    <Level.Item>
      <a>Deleted</a>
    </Level.Item>
    <Level.Item>
      <Button renderAs="a" color="success">
        New
      </Button>
    </Level.Item>
  </Level.Side>
</Level>`;

LevelNavDemo.bulmaCode = `<nav class="level">
  <div class="level-left">
    <div class="level-item">
      <p class="subtitle is-5">
        <strong>123</strong> posts
      </p>
    </div>
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Find a post">
        </p>
        <p class="control">
          <button class="button">
            Search
          </button>
        </p>
      </div>
    </div>
  </div>

  <div class="level-right">
    <p class="level-item"><strong>All</strong></p>
    <p class="level-item"><a>Published</a></p>
    <p class="level-item"><a>Drafts</a></p>
    <p class="level-item"><a>Deleted</a></p>
    <p class="level-item"><a class="button is-success">New</a></p>
  </div>
</nav>`;

export default LevelNavDemo;
