import { JSDOM } from 'jsdom';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { render } from 'react-testing-library';
import { getHtmlClasses, Navbar } from '..';

describe('Navbar component', () => {
  beforeEach(() => {
    // eslint-disable-next-line
    window = new JSDOM('<!doctype html><html><body><div id="app-root"></div></body></html>').window;

    global.window = window;
    global.document = window.document;
    global.navigator = {
      userAgent: 'node.js'
    };
  });

  it.each([
    [Navbar],
    [Navbar.Brand],
    [Navbar.Burger],
    [Navbar.Container],
    [Navbar.Divider],
    [Navbar.Dropdown],
    [Navbar.Item],
    [Navbar.Link],
    [Navbar.Menu]
  ])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render on server side', () => {
    const html = renderToString(<Navbar fixed="top" />);
    expect(html).toMatchSnapshot();
    expect(getHtmlClasses()).toMatchSnapshot('top');
  });

  it('should have Navbar classname', () => {
    const { asFragment, unmount } = render(
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
      </Navbar>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
  it('should concat Bulma class with classes in props', () => {
    const { asFragment, unmount } = render(<Navbar className="other-class test" />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
  it('should render as an html section', () => {
    const { asFragment, unmount } = render(<Navbar renderAs="section" />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
  it('should have custom inline styles', () => {
    const { asFragment, unmount } = render(<Navbar style={{ width: 200, zIndex: 1 }} />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it('should be fixed on top', () => {
    const { asFragment, unmount } = render(<Navbar fixed="top" />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
});
