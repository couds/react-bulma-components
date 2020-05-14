---
id: index
title: Start
description: Everything component you need to create a website with React Bulma
sidebar_label: Start
---

The main objective of this library it's to declare your layout as declarative as possible using react props instead of the classnames.

For example to use the column on Bulma you will write something like this

```jsx
<div className="columns">
  <div className="column is-4">Left Column</div>
  <div className="column">Middle Column</div>
  <div className="column is-4">Left Column</div>
</div>
```

With this library the same code will be this

```jsx
<Columns>
  <Columns.Column size={4}>Left Column</Columns.Column>
  <Columns.Column>Middle Column</Columns.Column>
  <Columns.Column size={4}>Left Column</Columns.Column>
</Columns>
```
