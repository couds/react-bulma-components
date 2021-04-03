import { Canvas, Story, Meta, ArgsTable } from '@storybook/addon-docs/blocks';
import { Message, Form } from '../../..';
import * as stories from './input-file.story';

<Meta title="Form/File" />

# InputFile

<Canvas>
  <Story story={stories.BasicUsage} />
</Canvas>

The `InputFile` component combines different HTML elements and Bulma classes required to
construct a Bulma file input into one React component.

<Message color="primary">
  <Message.Header>This is a controlled component</Message.Header>
  <Message.Body>
    <code>Form.InputFile</code> is a <strong>controlled component</strong>. You
    need to pass in the value and an <code>onChange</code> handler in order to
    see changes.
  </Message.Body>
</Message>

## Props

<ArgsTable of={Form.InputFile} />

## Modifiers

You can put the upload button to the right of the file label with the `right` prop. The file input will also be aligned
to the right.

<Story story={stories.RightButton} />

You can also center `InputFile` using the `centered` prop.

<Story story={stories.Centered} />

Tell the `InputFile` component to take up the full width with the `fullwidth` prop.

<Story story={stories.FullWidth} />

The `InputFile` component can also be drawn as a box. The file label will be under the button.

<Story story={stories.Boxed} />

## Colors and sizes

Like other components, you can customize the color and the size of `InputFile` using the `color` and `size` prop.

<Story story={stories.ColorsAndSizes} />
