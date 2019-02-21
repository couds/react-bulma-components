import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-testing-library';
import { Menu } from '..';

describe('Menu component', () => {
  it.each([[Menu], [Menu.List], [Menu.List.Item]])('should render', Component => {
    const { asFragment } = render(<Component>Content</Component>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should have render all', () => {
    const { asFragment } = render(
      <Menu>
        <Menu.List title="General">
          <Menu.List.Item>Dashboard</Menu.List.Item>
          <Menu.List.Item>Customer</Menu.List.Item>
        </Menu.List>
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should concat Menu.List to display as submenus', () => {
    const { asFragment } = render(
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
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should accept a react Element as renderAs prop', () => {
    const Custom = props => (
      <span {...props}>
        Custom
        {props.children}
      </span>
    );

    Custom.propTypes = { children: PropTypes.node.isRequired };

    const { asFragment } = render(
      <Menu>
        <Menu.List title="General">
          <Menu.List.Item renderAs={Custom}>Dashboard</Menu.List.Item>
          <Menu.List.Item renderAs={Custom}>Customer</Menu.List.Item>
        </Menu.List>
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render custom item child', () => {
    const { asFragment } = render(
      <Menu>
        <Menu.List title="General">
          <Menu.List.Item>
            <p>Custom children 1</p>
          </Menu.List.Item>
          <Menu.List.Item>
            <a>Custom children 2</a>
          </Menu.List.Item>
        </Menu.List>
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
