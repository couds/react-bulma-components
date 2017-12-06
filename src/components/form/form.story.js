import React, { PureComponent } from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import readme from './readme.md';

import { Field, Control, Label, Input, Textarea, Select, Checkbox, Radio, Help } from '.';
import Button from '../button';
import Icon from '../icon';

/* eslint-disable react/no-multi-comp */
const HoC = (Component) => {
  class Controlled extends React.Component {
    static displayName = 'Select'

    state = {
      value: '',
    }

    onChange = (evt) => {
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
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(withKnobs)
  .add('Default', withReadme(readme, () => (
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
        <Label>With Icons</Label>
        <Control iconLeft iconRight>
          <Input color="success" type="email" placeholder="I have icons" />
          <Icon align="left" icon="bars" />
          <Icon align="right" icon="bars" />
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
  )))
  .add('Handle Multiple inputs', withReadme(readme, () => {
    /* eslint-disable react/no-multi-comp */
    class MultiInputHandler extends PureComponent {
      state = {
        email: '',
        name: '',
        password: '',
        comment: '',
        gender: '',
        framework: [],
        question: null,
        termsAccepted: false,
      }

      onChange = ({ target }) => {
        let value = target.type === 'checkbox' ? target.checked : target.value;
        // TODO: BUGGY
        if (target.multiple) {
          const oldValues = this.state[target.name];
          if (oldValues.includes(target.value)) {
            value = oldValues.filter(x => x !== target.value);
          } else {
            value = oldValues.concat([target.value]);
          }
        }
        this.setState({
          [target.name]: value,
        });
      }

      render() {
        const { email,
          name,
          password,
          comment,
          gender,
          question,
          termsAccepted,
          framework,
        } = this.state;
        return (
          <div>
            <Field>
              <Label>Email</Label>
              <Control>
                <Input onChange={this.onChange} name="email" type="email" placeholder="Email input" value={email} />
              </Control>
            </Field>
            <Field>
              <Label>Name</Label>
              <Control>
                <Input onChange={this.onChange} name="name" type="text" placeholder="Name input" value={name} />
              </Control>
            </Field>
            <Field>
              <Label>Password</Label>
              <Control>
                <Input onChange={this.onChange} name="password" type="password" placeholder="Password" value={password} />
              </Control>
            </Field>
            <Field>
              <Label>Gender</Label>
              <Control>
                <Select onChange={this.onChange} name="gender" value={gender}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other?</option>
                </Select>
              </Control>
            </Field>
            <Field>
              <Label>Which framekworks are you using?</Label>
              <Control>
                <Select multiple onChange={this.onChange} name="framework" value={framework}>
                  <option>React</option>
                  <option>Vue</option>
                  <option>Angula</option>
                  <option>Other.. Why??</option>
                </Select>
              </Control>
            </Field>
            <Field>
              <Label>Message</Label>
              <Control>
                <Textarea name="comment" value={comment} onChange={this.onChange} placeholder="Textarea" />
              </Control>
            </Field>
            <Field>
              <Label>Do you undertood how to use me?</Label>
              <Control>
                <Radio onChange={this.onChange} checked={question === 'Yes'} value="Yes" name="question">
                  Yes
                </Radio>
                <Radio onChange={this.onChange} checked={question === 'No'} value="No" name="question" >
                  No
                </Radio>
              </Control>
            </Field>
            <Field>
              <Control>
                <Checkbox name="termsAccepted" onChange={this.onChange} checked={termsAccepted}>
                  I agree to the <a href="#agree">terms and conditions</a>
                </Checkbox>
              </Control>
            </Field>
            <pre>
              <code>
                {JSON.stringify(this.state, null, 2)}
              </code>
            </pre>
          </div>
        );
      }
    }
    return <MultiInputHandler />;
  }));
