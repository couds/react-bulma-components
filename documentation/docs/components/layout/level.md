---
id: level
title: Level
sidebar_label: Level
---

import Level from 'react-bulma-components/lib/components/level';
import { Field, Control, Input } from 'react-bulma-components/lib/components/form';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';
import Box from 'react-bulma-components/lib/components/box';

## Overview

The Level component is a simple horizontal container that can be used to structure other elements.

### Import

```js
import Level from 'react-bulma-components/lib/components/level';
```

### Components & Props

The `Level` element consists of 3 components.

#### `<Level />`

The main component

<br />

#### `<Level.Side />`

Component to align contents to either left or right side.

| Prop name | Type                  | Default values |
| --------- | --------------------- | -------------- |
| `align`   | `'left'` or `'right'` | `'left'`       |

<br />

#### `<Level.Item />`

An item in `<Level />` or `<Level.Side />`

---

## Basic

1. Create your main container with the `<Level />` component.

2. Align your contents to either side with the `<Level.Side />` component.

3. Add contents to your level container with the `<Level.Item />` component.

<br />

<Box>
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
          <Button renderAs="button">
            Search
          </Button>
          </Control>
        </Field>
      </Level.Item>
    </Level.Side>
    <Level.Side align="right">
      <Level.Item><strong>All</strong></Level.Item>
      <Level.Item renderAs="a">Published</Level.Item>
      <Level.Item renderAs="a">Drafts</Level.Item>
      <Level.Item renderAs="a">Deleted</Level.Item>
      <Level.Item>
        <Button color="info">New</Button>
      </Level.Item>
    </Level.Side>
  </Level>
</Box>

```jsx
<Box>
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
            <Button>Search</Button>
          </Control>
        </Field>
      </Level.Item>
    </Level.Side>
    <Level.Side align="right">
      <Level.Item>
        <strong>All</strong>
      </Level.Item>
      <Level.Item renderAs="a">Published</Level.Item>
      <Level.Item renderAs="a">Drafts</Level.Item>
      <Level.Item renderAs="a">Deleted</Level.Item>
      <Level.Item>
        <Button color="info">New</Button>
      </Level.Item>
    </Level.Side>
  </Level>
</Box>
```

---

## Centered Level

Put all `<Level.Item />` directly under `<Level />` to center them.

<Box>
  <Level renderAs="nav">
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Tweets
        </Heading>
        <Heading renderAs="p">
          3,210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Following
        </Heading>
        <Heading renderAs="p">
          210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Followers
        </Heading>
        <Heading renderAs="p">
          321
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Likes
        </Heading>
        <Heading renderAs="p">
          321K
        </Heading>
      </div>
    </Level.Item>
 </Level>
</Box>

```jsx
<Box>
  <Level renderAs="nav">
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Tweets
        </Heading>
        <Heading renderAs="p">3,210</Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Following
        </Heading>
        <Heading renderAs="p">210</Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Followers
        </Heading>
        <Heading renderAs="p">321</Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Likes
        </Heading>
        <Heading renderAs="p">321K</Heading>
      </div>
    </Level.Item>
  </Level>
</Box>
```

---

## Mobile level

By default, levels are vertical on mobile. Use `breakpoint="mobile"` to make it horizontal.

:::tip
Try resizing the window to see what happens!
:::

<Box>
  <Level renderAs="nav" breakpoint='mobile'>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Tweets
        </Heading>
        <Heading renderAs="p">
        3,210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
    <div>
        <Heading renderAs="p" heading>
        Following
        </Heading>
        <Heading renderAs="p">
        210
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Followers
        </Heading>
        <Heading renderAs="p">
        321
        </Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
        Likes
        </Heading>
        <Heading renderAs="p">
        321K
        </Heading>
      </div>
    </Level.Item>
  </Level>
</Box>

```jsx
<Box>
  <Level renderAs="nav" breakpoint="mobile">
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Tweets
        </Heading>
        <Heading renderAs="p">3,210</Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Following
        </Heading>
        <Heading renderAs="p">210</Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Followers
        </Heading>
        <Heading renderAs="p">321</Heading>
      </div>
    </Level.Item>
    <Level.Item>
      <div>
        <Heading renderAs="p" heading>
          Likes
        </Heading>
        <Heading renderAs="p">321K</Heading>
      </div>
    </Level.Item>
  </Level>
</Box>
```

---

## Official documentation

https://bulma.io/documentation/layout/level
