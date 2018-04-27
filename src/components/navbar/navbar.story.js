
/* eslint-disable react/no-multi-comp, react/prop-types */
import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Field, Control } from '../form';
import Button from '../button';
import CONSTANTS from '../../constants';

import Navbar from '.';

const colors = [null].concat(Object.keys(CONSTANTS.COLORS).map(key => CONSTANTS.COLORS[key]));

storiesOf('Navbar', module)
  .addDecorator(story => (
    <div style={{ margin: 10 }}>
      {story()}
    </div>
  ))
  .add('Default', withInfo('Default Implementation')(() => (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Item renderAs="a" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container>
          <Navbar.Item Dropdown hoverable>
            <Navbar.Link>
            Docs
            </Navbar.Link>
            <Navbar.Dropdown boxed>
              <Navbar.Item href="#">
                Home
              </Navbar.Item>
              <Navbar.Item href="#">
                List
              </Navbar.Item>
              <Navbar.Item href="#">
                Another Item
              </Navbar.Item>
              <Navbar.Divider />
              <Navbar.Item active href="#">
                Active
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
          <Navbar.Item href="#">
            Second
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item Dropdown hoverable>
            <Navbar.Link>
              Other Menu
            </Navbar.Link>
            <Navbar.Dropdown right boxed>
              <Navbar.Item href="#">
                this is aligned to the right
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )))
  .add('Colors', withInfo()(() => {
    class Component extends React.Component {
      state = {
        color: null,
      }
      render() {
        const { children } = this.props;
        return (
          <Fragment>
            {React.cloneElement(children, { color: this.state.color })}

            <div style={{ marginTop: '2rem' }}>
              <Field kind="group">
                <Control>
                  <Button color={null} onClick={() => this.setState({ color: null })}>default</Button>
                </Control>
                {colors
                  .filter(c => !!c)
                  .map(color => (
                    <Control key={color}>
                      <Button color={color} onClick={() => this.setState({ color })}>{color}</Button>
                    </Control>
                ))}
              </Field>
            </div>
          </Fragment>
        );
      }
    }
    return (
      <Component>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item dropdown hoverable>
                <Navbar.Link>
                  Docs
                </Navbar.Link>
                <Navbar.Dropdown boxed>
                  <Navbar.Item href="#">
                    Home
                  </Navbar.Item>
                  <Navbar.Item href="#">
                    List
                  </Navbar.Item>
                  <Navbar.Item href="#">
                    Another Item
                  </Navbar.Item>
                  <Navbar.Divider />
                  <Navbar.Item active href="#">
                    Active
                  </Navbar.Item>
                </Navbar.Dropdown>
              </Navbar.Item>
              <Navbar.Item href="#">
                    Second
              </Navbar.Item>
            </Navbar.Container>
            <Navbar.Container position="end">
              <Navbar.Item href="#">
                    At the end
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </Component>
    );
  }))
  .add('Fixed', withInfo('Default Implementation')(() => {
    class Component extends React.Component {
      state = {
        fixed: null,
      }
      render() {
        const { children } = this.props;
        const { fixed } = this.state;
        return (
          <Fragment>
            {React.cloneElement(children, { fixed })}

            <div style={{ height: '150vh' }}>
              <Field kind="group">
                <Control>
                  <Button onClick={() => this.setState({ fixed: 'top' })}>Fixed Top</Button>
                </Control>
                <Control>
                  <Button onClick={() => this.setState({ fixed: 'bottom' })}>Fixed Botton</Button>
                </Control>
                <Control>
                  <Button onClick={() => this.setState({ fixed: undefined })}>Normal</Button>
                </Control>
              </Field>
            </div>
          </Fragment>
        );
      }
    }
    return (
      <Component>
        <Navbar>
          <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </Navbar.Item>
            <Navbar.Burger />
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item href="#">
                    Second
              </Navbar.Item>
            </Navbar.Container>
            <Navbar.Container position="end">
              <Navbar.Item href="#">
                    At the end
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </Component>
    );
  }));
