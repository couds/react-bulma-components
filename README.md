<div style="text-align: center"><img src="https://raw.githubusercontent.com/couds/react-bulma-components/master/static/img.png" width="128" style="margin-top: 3px" /></div>

# React Bulma Components


[![Build Status](https://travis-ci.org/couds/react-bulma-components.svg?branch=master)](https://travis-ci.org/couds/react-bulma-components)
[![Coverage Status](https://coveralls.io/repos/github/couds/react-bulma-components/badge.svg?branch=master)](https://coveralls.io/github/couds/react-bulma-components?branch=master)
[![Release Version](https://img.shields.io/github/release/couds/react-bulma-components.svg)](https://github.com/couds/react-bulma-components)
[![Npm Downloads](https://img.shields.io/npm/dm/react-bulma-components.svg)](https://www.npmjs.com/package/react-bulma-components)

React components for [Bulma](http://bulma.io/) (v0.9.2) UI compatible with most used React Frameworks ([Gatsby](https://www.gatsbyjs.org/), [CRA](https://github.com/facebook/create-react-app), [Next.js](https://nextjs.org/))

## To Install


```npm install react-bulma-components``` or ```yarn add -E react-bulma-components```


## Documentation

You can find the documentation in https://react-bulma.dev/en/storybook

Some components may vary the api/naming convention with the Bulma Docs. Please refer to each stories in the Storybook to see how each component could be used

## To Use

```javascript
import React from 'react';
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

export default () => (
  <Button color="primary">My Bulma button</Button>
)
```

Form elements are imported as part of the Form class.

```javascript
import { Form } from 'react-bulma-components';

const { Input, Field, Control, Label } = Form;
```

## SASS support

Since CSS logic is separated from this library, there is no special setup required with the library. Simply follow
the [instructions](https://bulma.io/documentation/overview/modular/) in the official documentation. You only need to
make sure the CSS is properly imported for your website.

Starting from v4, tree shaking is supported, so only the code of the components you have imported will be bundled.

## FAQ

### Use Button to render a Link from React-Router
We allow custom render component on all our components, to do it you can use the `renderAs` props like this

```javascript
import React from 'react';
import { Button } from 'react-bulma-components';
import { Link } from 'react-router';

const CustomLink = ({ to }) => {
  return (
    <Button to={to} renderAs={Link}>
      My react router link
    </Button>
  )
}

```


### Adding ref to a component
We use a custom prop to pass down the ref to the next dom object. (instead to the instance of the component).

```javascript
const TestComponent = () => {
  const buttonRef = useRef(null);
  return <Button domRef={buttonRef}>button</Button>
}
```

**Why we do this instead of using** [React.forwardRef](https://reactjs.org/docs/forwarding-refs.html)? The forwardRef wrap the component into another one, because this is a library for wrapping the Bulma Framework cause an overhead and a lot of noise on the component tab of the React Dev Tools.
