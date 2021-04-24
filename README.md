# <div style="display: flex; align-items: center"><img src="https://raw.githubusercontent.com/couds/react-bulma-components/next/documentation/static/img/logo.png" width="40" style="margin-top: 3px" /><span>React Bulma Components</span></div>


[![Build Status](https://travis-ci.org/couds/react-bulma-components.svg?branch=master)](https://travis-ci.org/couds/react-bulma-components)
[![Coverage Status](https://coveralls.io/repos/github/couds/react-bulma-components/badge.svg?branch=master)](https://coveralls.io/github/couds/react-bulma-components?branch=master)
[![Release Version](https://img.shields.io/github/release/couds/react-bulma-components.svg)](https://github.com/couds/react-bulma-components)
[![Npm Downloads](https://img.shields.io/npm/dm/react-bulma-components.svg)](https://www.npmjs.com/package/react-bulma-components)

React components for [Bulma](http://bulma.io/) (v0.9.2) UI compatible with most used React Frameworks ([Gatsby](https://www.gatsbyjs.org/), [CRA](https://github.com/facebook/create-react-app), [Next.js](https://nextjs.org/))

## To Install


```npm install react-bulma-components``` or ```yarn add -E react-bulma-components```

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


## Documentation

You can find the documentation in https://react-bulma.dev/storybook

Some components may vary the api/naming convention with the Bulma Docs. Please refer to each stories in the Storybook to see how each component could be used (you can find the source code of the story on the tab `Story` on the bottom panel
