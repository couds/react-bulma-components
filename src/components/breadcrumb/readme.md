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

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|string|no|"''"|||
|style|object|no|"{}"|||
|separator|`enum ['', 'arrow', 'bullet', 'dot', 'succeeds']`|no|"null"|Style of the separator using Bulma|`has-arrow-separator`, `has-bullet-separator`, `has-dot-separator`, `has-succeeds-separator`|
|size|`enum ['', 'small', 'medium', 'large']`|no|"null"|Size of the Breadcrumb using the bulma classes|`is-small`, `is-medium`, `is-large`|
|align|`enum ['', 'right', 'center']`|no|"null"|Alignment of the breadcrumb, by default is Left|`is-right`, `is-centered`|
|items|`shape[{ name: String, url: String, active: Bool }]`|no|"[]"|Array of Links on the breadcrumb||
|hrefAttr|string|no|"null"|if the element is not an `a` html anchor the value needs to be equivalent attribute of the href (ex: For `Link` component from react-router this attribute need to be set to `To`)||
|renderAs|no|"'a'"||the Html or React element you want to use to render this component||
