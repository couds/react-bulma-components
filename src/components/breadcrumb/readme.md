## Breadcrumb Component

A simple breadcrumb component to improve your navigation experience ([Bulma docs](https://bulma.io/documentation/components/breadcrumb/))


### Usage:

- `import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb'` to only import this components and his css (**Recommended**)
- `import { Breadcrumb } from react-bulma-components`

```jsx
<Breadcrumb
  items={[
    {
      name: 'Storybook',
      url: '#1',
    }, {
      name: 'Breadcrumb',
      url: '#2',
    }, {
      name: 'Breadcrumb Types',
      url: '#3',
      active: true,
    },
  ]}
/>
```

### Props

|property|propType|required|default|description|
|--- |--- |--- |--- |--- |
|className|`string`|no|||
|style|`object`|no|`{}`||
|separator|`enum` `['arrow', 'bullet', 'dot', 'succeeds']`|no|`null`||
|size|`enum` `['small', 'medium', 'large']`|no|`null`||
|align|`enum` `['right', 'center']`|no|`null`||
|items|`Array` of `[{ name: String, url: String, active: Bool }]`|no|`[]`||
|renderAs|`string` or `ReactElement`|no|`a`|||
|hrefAttr|`string`|no|`null`| If renderAs is differenct to `a` specify the href attribute of the element (ex: `to` for the `Link` element of react-router)
