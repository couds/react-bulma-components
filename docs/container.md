# Container

A simple container to center your content horizontally
------

The Container  can be used in any context, but mostly as a direct child of either:

- Navbar
- Hero
- Section
- Footer

on $desktop + $container-offset = >= 1068px it will have a maximum width of 960px and will be horizontally centered.
on $widescreen + $container-offset = >= 1260px it will have a maximum width of 1152px.
on $fullhd + $container-offset = >= 1452px it will have a maximum width of 1344px.
The $gap variable has a default value of 24px but can be modified.

The values 960, 1152 and 1344 have been chosen because they are divisible by both 12 and 16.

Usage:

```javascript
<Container>
  ...CONTENT...
</Container>
```

## Columns Props

| Property   |      Type      | Default | Description |
|----------|:-------------:|:------:|:----------|
| className |  `String` | `Empty` |Class of the columns container, ex: ```className="container"``` |
| style |    `Object`   | `{}` | React style object, ex: ```style={{ width: 100 }}``` |
| breakpoint | One of  `widescreen`, `fullhd` | `null` |   with this you can have a fullwidth container until those specific breakpoints. |
| fluid | `Boolean` | `false` | if true the container will fill the width no matter the screen size |
| renderAs | `String` | `div` | Html that will use to render this component |