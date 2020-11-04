---
id: options
title: Options
sidebar_label: Options
---

import { Columns, Notification } from 'react-bulma-components';

There are couple other options that you can use to customize column behaviors further.

## Vertically centered content

By default, columns are top-aligned. You can set the `vCentered` value to true so that they are
vertically centered instead.

<Columns vCentered>
  <Columns.Column size={8}>
    <Notification>
      <p>First column</p>
    </Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">
      <p>
        Second column with more content. This is so you can see the vertical alignment.
      </p>
    </Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns vCentered>
  <Columns.Column size={8}>
    <Notification>
      <p>First column</p>
    </Notification>
  </Columns.Column>
  <Columns.Column>
    <Notification color="primary">
      <p>
        Second column with more content. This is so you can see the vertical alignment.
      </p>
    </Notification>
  </Columns.Column>
</Columns>
```

## Horizontally centered columns

Along with vertically centering columns, you can also horizontally center them with the `centered` prop.

<Columns centered vCentered>
  <Columns.Column size="half">
    <Notification color="primary">Centered!</Notification>
  </Columns.Column>
</Columns>

```jsx
<Columns centered>
  <Columns.Column size="half">
    <Notification size="primary">Centered!</Notification>
  </Columns.Column>
</Columns>
```

## Multiline columns

Instead of using multiple `Columns` component, you can use the `multiline` prop, which allows more columns to fit
in different rows.

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

```jsx
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
```

---

## Official documentation

https://bulma.io/documentation/columns/options
