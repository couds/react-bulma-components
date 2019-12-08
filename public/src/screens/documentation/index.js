import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import Menu from 'react-bulma-components/lib/components/menu';

// import Item from './components/item';
import Sections from './sections';

const Documentation = ({ location, match }) => {
  const renderMenuItems = () => Sections.map(section => {
    const sectionPath = `${match.url}/${section.name.toLowerCase()}`;
    return (
      <Menu.List.Item
        key={section.name}
        renderAs={Link}
        to={sectionPath}
        active={location.pathname.includes(sectionPath)}
      >
        <Menu.List key={section} title={section.name}>
          {section.sections.map(({ name: componentName }) => {
            const componentNameLower = componentName.toLowerCase();
            const path = `${sectionPath}/${componentNameLower}`;

            return (
              <Menu.List.Item
                key={componentNameLower}
                renderAs={Link}
                to={path}
                active={location.pathname === path}
              >
                {componentName}
              </Menu.List.Item>
            );
          })}
        </Menu.List>
      </Menu.List.Item>
    )
  });

  const renderRoutes = () => Sections.map(section => (
    <Route exact key={section.name}>
      <Switch key={section.name}>
        <Route
          exact
          path={`${match.url}/${section.name}`}
          component={section.component}
        />
        {section.sections.map(({ name: componentSectionName, component: componentDoc }) => (
          <Route
            exact
            key={componentSectionName}
            path={`${match.url}/${section.name.toLowerCase()}/${componentSectionName}`}
            component={componentDoc}
          />
        ))}
      </Switch>
    </Route>
  ));

  return (
    <Container fluid style={{ marginTop: '2rem' }}>
      <Columns>
        <Columns.Column
          size={2}
          desktop={{ offset: 1 }}
          responsive={{
            mobile: {
              hide: {
                only: false,
                value: true
              },
            },
          }}
        >
          <Menu>
            <Menu.List>
              {renderMenuItems()}
            </Menu.List>
          </Menu>
        </Columns.Column>
        <Columns.Column size={8}>
          <Route exact path={match.url}>
            <Heading>
              Documentation
            </Heading>
            <Heading subtitle size={4} renderAs="p">
              All you need to build your site
            </Heading>
          </Route>
          {renderRoutes()}
        </Columns.Column>
      </Columns>
    </Container>
  );
};

Documentation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Documentation;
