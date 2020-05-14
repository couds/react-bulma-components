---
id: basic-configuration
title: Basic Configuration
sidebar_label: Basic Configuration
sidebar_id: someSidebar
---
import { Button } from 'react-bulma-components/lib';

This configuration will allow you to start fast with minimum configuration but with less customization. With this configuration you are responsable to include the bulma css.

After the instalation you need to include the already transpiled bulma css, and you can start importing the component you need from the basic folder.

```jsx
import React from 'react';
import 'react-bulma-components/basic/react-bulma-components.min.css';
import { Button } from 'react-bulma-components/dist';

const App = () => (
  <div>
    <Button rounded color="primary">My Bulma button</Button>
  </div>
);
```

This code will generate this

<Button rounded color="primary">My Bulma button</Button>
