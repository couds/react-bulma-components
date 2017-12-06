## Card Component

An all-around flexible and composable component ([Bulma docs](https://bulma.io/documentation/components/card/))


### Usage:

- `import Card from 'react-bulma-components/lib/components/card'` to only import this components and his css (**Recommended**)
- `import { Card } from react-bulma-components`

```jsx
<Card>
  <Card type="image" size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
  <Card type="content">
    <Media>
      <Media.Item renderAs="figure" position="left">
        <Image renderAs="p" size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media.Item>
      <Media.Item>
        <Heading size={4}>John Smith</Heading>
        <Heading subtitle size={6}>@johnsmith</Heading>
      </Media.Item>
    </Media>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#1">#css</a> <a href="#2">#responsive</a>
      <br />
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </Content>
  </Card>
</Card>
```

### Props

|property|propType|required|default|description|Bulma equivalent class|
|--- |--- |--- |--- |--- |--- |
|className|`string`|no|"''"|||
|children|`node`|no|"null"|||
|style|`object`|no|"{}"|||
|renderAs|`string`|no|"'div'"|||
|type|`enum ['header', 'header-title', 'header-icon', 'footer', 'footer-item', 'image', 'content']`|no|"null"|The type of the card you want to render (See Bulma docs for more info). **default**: the main container, **header**: a horizontal bar with a shadow, **header-title**: a left-aligned bold text, **header-icon**: a placeholder for an icon, **image**: a fullwidth container for a reponsive image, **content**: a multi-purpose container for any other element, **footer**: a horizontal list of controls, **footer-item**: a repeatable list item|`header`, `header-title`, `header-icon`, `footer`, `footer-item`, `image`, `content`|