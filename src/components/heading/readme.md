## Heading Component

A single class to handle WYSIWYG generated content, where only HTML tags are available ([Bulma docs](https://bulma.io/documentation/elements/content/))


### Usage:

- `import Heading from 'react-bulma-components/lib/components/heading'` to only import this components and his css (**Recommended**)
- `import { Heading } from react-bulma-components`

```jsx
<div>
  <Heading>
    Title
  </Heading>
  <Heading subtitle size={6}>
    Subtitle
  </Heading>
</div>
```

### Props

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|renderAs|`string`|no|`h1`|the Html or React element you want to use to render this component||
|size|`enum [1, 2, 3, 4, 5, 6]`|no|`null`|Title Size|`is-1`, `is-2`, `is-3`, `is-4`, `is-5`, `is-6`|
|subtitle|`bool`|no|`false`|True if is a subtitle|`is-subtitle`|
|heading|`bool`|no|`false`|True to disable Title and use Heading class|`heading`|
|spaced|`bool`|no|`false`|True to add spacing between Title and Subtitle|`is-spaced`|
