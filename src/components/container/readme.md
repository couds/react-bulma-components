## Container Component

A simple container to center your content horizontally ([Bulma docs](https://bulma.io/documentation/layout/container/))


### Usage:

- `import Container from 'react-bulma-components/lib/components/container'` to only import this components and his css (**Recommended**)
- `import { Container } from react-bulma-components`

```jsx
<Container>
  <p>
    <Heading size={5} renderAs="p">Default</Heading>
    <Heading subtitle renderAs="p">Container</Heading>
  </p>
</Container>
```

### Props

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|renderAs|`string`|no|`div`|the Html or React element you want to use to render this component||
|fluid|`bool`|no|`false`|If you don't want to have a maximum width but want to keep the 24px margin on the left and right sides|`is-fluid`|
|breakpoint|`enum ['desktop', 'tablet', 'mobile', 'widescreen', 'fullhd']`|no|`null`|You can have a fullwidth container until those specific breakpoints.|`is-desktop`, `is-tablet`, `is-mobile`, `is-widescreen`, `is-fullhd`|