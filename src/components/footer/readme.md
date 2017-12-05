## Footer Component

A simple responsive footer which can include anything: lists, headings, columns, icons, buttons, etc. ([Bulma docs](https://bulma.io/documentation/layout/footer/))


### Usage:

- `import Footer from 'react-bulma-components/lib/components/footer'` to only import this components and his css (**Recommended**)
- `import { Footer } from react-bulma-components`

```jsx
<Footer>
  <Container>
    <Content style={{ textAlign: 'center' }}>
      <p>
        <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </Content>
  </Container>
</Footer>
```

### Props

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|`''`|||
|style|`object`|no|`{}`|||
|renderAs|`string`|no|`div`|the Html or React element you want to use to render this component||