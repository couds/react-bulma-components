---
id: common-props
title: Common Props
sidebar_label: Common Props
---
import { Element } from 'react-bulma-components/lib';

## One Element to Rule them All

All components on this library render a component named `Element`, this component is the one that have all the generic classes that bulma has ([helpers, modifiers, responsive, etc](https://bulma.io/documentation/modifiers/)). These are the props of this component

## Colors

You can check the valid colors [here](variables#colors)

|Prop|PropType|Bulma Class|Posible Values|
|----|--------|-----|
|textColor|String|has-text-**value**| Any valid color
|backgroundColor|String|has-background-**value**|

## Helpers

|Prop|PropType|Bulma Class|Posible Values|
|----|--------|-----|
|clearfix|Bool|is-clearfix
|pull|String|is-pulled-**value**| right
|marginless|Bool|is-marginless
|paddingless|Bool|is-paddingless
|overlay|Bool|is-overlay
|clipped|Bool|is-clipped
|radiusless|Bool|is-radiusless
|shadowless|Bool|is-shadowless
|unselectable|Bool|is-unselectable
|invisible|Bool|is-invisible


## Typography

|Prop|PropType|Bulma Class| Posible Values|
|----|--------|-----|
|textSize|Number|is-size-**value**| `1, 2, 3, 4, 5, 6`
|textAlignment|String|has-text-**value**|`centered, justified, left, right`
|textTransform|String|is-**value**| `capitalized, lowercase, uppercase`
|textWeight|String|has-text-weight-**value**| `light, normal, semibold, bold`
|italic|Bool|is-italic|

## Responsive

This props is less straightforward. The value of the responsive prop is a custom object defining for each size, this object contain the values for display, visibility, text-size and text-align.

For more details check the [bulma.io Docs](https://bulma.io/documentation/modifiers/responsive-helpers/)

### Size Shape

|Size Field|PropType|Bulma Class| Posible Values|
|----|--------|-----|----|
|display|Shape|is-**value**-**prop** or is-**value**-**prop**-only is `display.only` is truthly|`block, flex, inline, inline-block, inline-flex`
|hide|Shape|is-hidden-**prop** or is-hidden-**prop**-only is `hide.only` is truthly. | `true, false`
|textSize|Shape|is-size-**value**-**prop**. This props **do not** have the only field| `1, 2, 3, 4, 5, 6`
|textAlignment|Shape|has-text-**value**-**prop** or has-text-**value**-**prop**-only is `textSize.only` is truthly | `centered, justified, left, right`

```json
// Shape of each prop field
{
  "value": String|Number|Boolean,
  "only": true|false
}
```

### Example

```jsx

const mobile = { display: { value: 'block'}, hide: { value: false}, textSize: { value: 2 }, textAlignment: { value: 'centered'} };
const tablet = { display: { value: 'inline' }, hide: { value:true }, textSize: { value: 4 } };
const touch = { display: { value: 'inline' }, hide: { value: false }, textSize: { value: 3 }, textAlignment: { value: 'right'} };
const desktop = { display: { value: 'block'}, hide: { value: false }, textSize: { value: 4 }, textAlignment: { value: 'right' } };
const widescreen = { display: { value: 'flex' }, hide: { value: false }, textSize: { value: 1 }, textAlignment: { value: 'left' } };
const fullhd = { display: { value: 'block' }, hide: { value: false }, textSize: { value: 6 }, textAlignment: 'centered' }


<Element backgroundColor="primary" responsive={{ mobile, tablet, desktop, widescreen, fullhd, touch }}>
  I'm responsive
</Element>

<Element 
  backgroundColor="success"
  responsive={{
    mobile: { hide: { value: true } },
    desktop: { hide: { value: true } },
  }}>
  You can only see me on tablet size
</Element>
```

:::note

Play with the devtool responsive to see how this component change

:::

<Element backgroundColor="primary"
responsive={{
  mobile: { display: { value: 'block', only: true }, hide: { value: false, only: true }, textSize: { value: 2, only: true  }, textAlignment: { value: 'centered', only: true } },
  tablet: { hide: { value: true, only: true } },
  desktop: { display: { value: 'block', only: true }, hide: { value: false, only: true }, textSize: { value: 4, only: true }, textAlignment: { value: 'right', only: true } },
  widescreen: { display: { value: 'flex', only: true }, hide: { value: false }, textSize: { value: 1, only: true }, textAlignment: { value: 'left', only: true } },
  fullhd: { display: { value: 'flex' }, hide: { value: false }, textSize: { value: 6 }, textAlignment: 'centered' },
  touch: { display: { value: 'block' }, hide: { value: false }, textSize: { value: 3 }, textAlignment: { value: 'right'} },
}}>
  I'm responsive
</Element>


<Element 
backgroundColor="success"
responsive={{
  mobile: { hide: { value: true } },
  desktop: { hide: { value: true } },
}}>
  You can only see me on tablet size
</Element>

## Composing

