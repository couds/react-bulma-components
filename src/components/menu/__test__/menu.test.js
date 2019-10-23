import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Menu from '..';

describe('Menu component', () => {
  it('Should Exist', () => {
    expect(Menu).toMatchSnapshot();
  });
  it('Should have menu classnames', () => {
    const component = renderer.create(
      <Menu>
        <Menu.List title="General">
          <Menu.List.Item>Dashboard</Menu.List.Item>
          <Menu.List.Item>Customer</Menu.List.Item>
        </Menu.List>
      </Menu>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Menu.List to display as submenus', () => {
    const component = renderer.create(
      <Menu>
        <Menu.List title="General">
          <Menu.List.Item>Dashboard</Menu.List.Item>
          <Menu.List.Item>
            <Menu.List.Item active>
              <Menu.List title="Manage Your Team">
                <Menu.List.Item>Members</Menu.List.Item>
                <Menu.List.Item active>Plugins</Menu.List.Item>
                <Menu.List.Item>Add a member</Menu.List.Item>
              </Menu.List>
            </Menu.List.Item>
          </Menu.List.Item>
        </Menu.List>
      </Menu>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should accept a react Element as renderAs prop', () => {
    // eslint-disable-next-line react/prop-types
    const Custom = props => (
      <span {...props}>
        Custom
        {props.children}
      </span>
    );

    Custom.propTypes = { children: PropTypes.node.isRequired };

    const component = renderer.create(
      <Menu>
        <Menu.List title="General">
          <Menu.List.Item renderAs={Custom}>Dashboard</Menu.List.Item>
          <Menu.List.Item renderAs={Custom}>Customer</Menu.List.Item>
        </Menu.List>
      </Menu>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render custom item child', () => {
    // eslint-disable-next-line react/prop-types
    const component = renderer.create(
      <Menu>
        <Menu.List title="General">
          <Menu.List.Item>
            <p>Custom children 1</p>
          </Menu.List.Item>
          <Menu.List.Item>
            <a>Custom children 2</a>
          </Menu.List.Item>
        </Menu.List>
      </Menu>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
