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

  test('Should have responsive modifier flex-tablet-only and block-widescreen', () => {
    expect(
      modifiers.classnames({
        responsive: {
          tablet: {
            display: {
              value: 'flex',
              only: true,
            },
          },
          widescreen: {
            display: {
              value: 'block',
            },
          },
        },
      }),
    ).toMatchSnapshot();
  });

  test('Should have hidden modifier tablet-only and widescreen', () => {
    expect(
      modifiers.classnames({
        responsive: {
          tablet: {
            hide: {
              value: true,
              only: true,
            },
          },
          widescreen: {
            hide: {
              value: true,
            },
          },
        },
      }),
    ).toMatchSnapshot();
  });

  test('Should have alignment responsive modifiers', () => {
    expect(
      modifiers.classnames({
        responsive: {
          tablet: {
            textAlignment: {
              value: 'centered',
              only: true,
            },
          },
          widescreen: {
            textAlignment: {
              value: 'left',
            },
          },
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
