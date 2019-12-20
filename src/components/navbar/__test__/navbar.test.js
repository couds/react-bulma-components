import React from 'react';
import renderer from 'react-test-renderer';
import { JSDOM } from 'jsdom';
import { renderToString } from 'react-dom/server';
import Navbar, { getHtmlClasses } from '..';

describe('Navbar component', () => {
  let window;
  let component;
  beforeEach(() => {
    // eslint-disable-next-line
    window = new JSDOM(
      '<!doctype html><html><body><div id="app-root"></div></body></html>',
    ).window;

    global.window = window;
    global.document = window.document;
    global.navigator = {
      userAgent: 'node.js',
    };
  });
  afterEach(() => {
    if (component && component.unmount) {
      component.unmount();
    }
  });
  it('Should Exist', () => {
    expect(Navbar).toMatchSnapshot();
  });

  it('should render on server side', () => {
    const html = renderToString(<Navbar fixed="top" />);
    expect(html).toMatchSnapshot();
    expect(getHtmlClasses()).toMatchSnapshot('top');
  });

  it('Should have Navbar classname', () => {
    component = renderer.create(
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img src="/" alt="" />
          </Navbar.Item>
          <Navbar.Burger className="trigger-menu" />
        </Navbar.Brand>
        <div>TEST</div>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item dropdown hoverable>
              <Navbar.Link>Docs</Navbar.Link>
              <Navbar.Dropdown boxed>
                <Navbar.Item href="#">Home</Navbar.Item>
                <Navbar.Divider />
                <Navbar.Item href="#">Home</Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should concat Bulma class with classes in props', () => {
    component = renderer.create(<Navbar className="other-class test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should render as an html section', () => {
    component = renderer.create(<Navbar renderAs="section" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('Should have custom inline styles', () => {
    component = renderer.create(<Navbar style={{ width: 200, zIndex: 1 }} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should be fixed on top', () => {
    component = renderer.create(<Navbar fixed="top" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
