import modifiers from '..';

describe('Helper proptypes', () => {
  test('Should have paddingless and clearfix classes', () => {
    expect(
      modifiers.classnames({
        clearfix: true,
        paddingless: true,
      }),
    ).toMatchSnapshot();
  });

  test('Should have text helpers', () => {
    expect(
      modifiers.classnames({
        textColor: 'success',
        textAlignment: 'centered',
        italic: true,
        textTransform: 'uppercase',
        textWeight: 'bold',
      }),
    ).toMatchSnapshot();
  });

  test('Should have spacing helpers', () => {
    expect(
      modifiers.classnames({
        mx: 0,
        mt: 2,
        px: 1,
      }),
    ).toMatchSnapshot();
  });

  test('Should have responsive modifier flex-tablet-only and block-widescreen', () => {
    expect(
      modifiers.classnames({
        tabletOnly: {
          display: 'flex',
        },
        widescreen: {
          display: 'block',
        },
      }),
    ).toMatchSnapshot();
  });

  test('Should have hidden modifier tablet-only and widescreen', () => {
    expect(
      modifiers.classnames({
        tabletOnly: {
          hide: true,
        },
        widescreen: {
          hide: true,
        },
      }),
    ).toMatchSnapshot();
  });

  test('Should have alignment responsive modifiers', () => {
    expect(
      modifiers.classnames({
        tabletOnly: {
          textAlignment: 'centered',
        },
        widescreen: {
          textAlignment: 'left',
        },
      }),
    ).toMatchSnapshot();
  });

  test('Should have text color success', () => {
    expect(
      modifiers.classnames({
        textColor: 'success',
      }),
    ).toMatchSnapshot();
  });

  test('Should have background color success', () => {
    expect(
      modifiers.classnames({
        backgroundColor: 'success',
      }),
    ).toMatchSnapshot();
  });
});
