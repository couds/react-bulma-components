import modifiers from '..';

describe('Helper proptypes', () => {
  it('should have paddingless and clearfix classes', () => {
    expect(
      modifiers.getClassName({
        clearfix: true,
        paddingless: true
      })
    ).toMatchSnapshot();
  });

  it('should have text helpers', () => {
    expect(
      modifiers.getClassName({
        textColor: 'success',
        textAlignment: 'centered',
        italic: true,
        textTransform: 'uppercase',
        textWeight: 'bold'
      })
    ).toMatchSnapshot();
  });

  it('should have responsive modifier flex-tablet-only and block-widescreen', () => {
    expect(
      modifiers.getClassName({
        responsive: {
          tablet: {
            display: {
              value: 'flex',
              only: true
            }
          },
          widescreen: {
            display: {
              value: 'block'
            }
          }
        }
      })
    ).toMatchSnapshot();
  });

  it('should have hidden modifier tablet-only and widescreen', () => {
    expect(
      modifiers.getClassName({
        responsive: {
          tablet: {
            hide: {
              value: true,
              only: true
            }
          },
          widescreen: {
            hide: {
              value: true
            }
          }
        }
      })
    ).toMatchSnapshot();
  });

  it('should have alignment responsive modifiers', () => {
    expect(
      modifiers.getClassName({
        responsive: {
          tablet: {
            textAlignment: {
              value: 'centered',
              only: true
            }
          },
          widescreen: {
            textAlignment: {
              value: 'left'
            }
          }
        }
      })
    ).toMatchSnapshot();
  });

  it('should have text color success', () => {
    expect(
      modifiers.getClassName({
        textColor: 'success'
      })
    ).toMatchSnapshot();
  });

  it('should have background color success', () => {
    expect(
      modifiers.getClassName({
        backgroundColor: 'success'
      })
    ).toMatchSnapshot();
  });
});
