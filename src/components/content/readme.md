## Content Component

A single class to handle WYSIWYG generated content, where only HTML tags are available ([Bulma docs](https://bulma.io/documentation/elements/content/))


### Usage:

- `import Content from 'react-bulma-components/lib/components/content'` to only import this components and his css (**Recommended**)
- `import { Content } from react-bulma-components`

```jsx
<Content>
  <p>
    paragraph 1
  </p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
</Content>
```

### Props

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|renderAs|`string`|no|`div`|the Html or React element you want to use to render this component||
|size|`enum ['', 'small', 'medium', 'large']`|no|"null"|Size of the Content using the bulma classes|`is-small`, `is-medium`, `is-large`|