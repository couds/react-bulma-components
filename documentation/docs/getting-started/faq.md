---
id: faq
title: FAQ
sidebar_label: FAQ
---
import Button from 'react-bulma-components/lib/components/button';
import { Link } from 'react-router-dom';

## How to use it with React Router


To use a component (a Button for example) as a link ou just need to pass the `Link` or `NavLink` to the component using the prop `renderAs`. All prop not used by the library will be passed down to the `Link` component.

```jsx

<Button renderAs={Link} to="/">Navigate to Home</Button>

```


<Button renderAs={Link} to="/">Navigate to Home</Button>

## Getting the DOM ref

We decided to use a custom prop `domRef` instead of [React.forwardRef](https://reactjs.org/docs/forwarding-refs.html). Why? because this is a library for wrapping the Bulma Framework and doing it with forwardRef cause an overhead and a lot of noise on the component tab of the React Dev Tools

```jsx

const App = () => {
  const button = React.createRef()
  return (
    <Button domRef={button}>Button with ref</Button>
  )
}


```