import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help } from '.';
import Button from '../button';

/* eslint-disable react/no-multi-comp */
const HoC = (Component) => {
  class Controlled extends React.Component {
    static displayName = 'Select'

    state = {
      value: '',
    }

    onChange = (evt) => {
      console.log('new value', evt.target.value);
      this.setState({
        value: evt.target.value,
      });
    }

    render() {
      return <Component onChange={this.onChange} value={this.state.value} {...this.props} />;
    }
  }
  return Controlled;
};

const HoCCheckbox = (Component) => {
  class Controlled extends React.Component {
    static displayName = 'Checkbox'
    state = {
      checked: false,
    }

    onChange = (evt) => {
      console.log('new value', evt.target.checked);
      this.setState({
        checked: evt.target.checked,
      });
    }

    render() {
      return <Component onChange={this.onChange} checked={this.state.checked} {...this.props} />;
    }
  }
  return Controlled;
};

class RadioGroup extends React.Component {
  state = {
    selected: null,
  }

  onChange = (evt) => {
    console.log('new value', evt.target.value);
    this.setState({
      selected: evt.target.value,
    });
  }

  render() {
    return (
      <Control>
        <Radio onChange={this.onChange} checked={this.state.selected === 'Yes'} value="Yes" name="question">
          Yes
        </Radio>
        <Radio onChange={this.onChange} checked={this.state.selected === 'No'} value="No" name="question" >
          No
        </Radio>
      </Control>
    );
  }
}
/* eslint-enable react/no-multi-comp */
const SelectControlled = HoC(Select);
const CheckboxControlled = HoCCheckbox(Checkbox);

storiesOf('Form', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo()(() => (
    <div>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input placeholder="Text input" />
        </Control>
      </Field>

      <Field>
        <Label>Username</Label>
        <Control>
          <Input color="success" type="text" placeholder="Text input" value="bulma" />
        </Control>
        <Help color="success">This username is available</Help>
      </Field>

      <Field>
        <Label>Email</Label>
        <Control>
          <Input color="danger" type="email" placeholder="Email input" value="hello@" />
        </Control>
        <Help color="danger">This email is invalid</Help>
      </Field>

      <Field>
        <Label>Subject</Label>
        <Control>
          <SelectControlled>
            <option>Select dropdown</option>
            <option>With options</option>
          </SelectControlled>
        </Control>
      </Field>

      <Field>
        <Label>Message</Label>
        <Control>
          <Textarea placeholder="Textarea" />
        </Control>
      </Field>

      <Field>
        <Control>
          <CheckboxControlled>
            I agree to the <a href="#agree">terms and conditions</a>
          </CheckboxControlled>
        </Control>
      </Field>

      <Field>
        <RadioGroup />
      </Field>

      <Field kind="group">
        <Control>
          <Button type="primary">Submit</Button>
        </Control>
        <Control>
          <Button color="link">Cancel</Button>
        </Control>
      </Field>
    </div>
  )));
