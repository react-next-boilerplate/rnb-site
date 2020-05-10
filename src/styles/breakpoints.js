/* use
  ${breakpoints.down('sm')} {
    .my-class {
      color: red;
    }
  }
*/

export const keys = ['xs', 'sm', 'md', 'lg', 'xl'];

// Keep in mind that @media is inclusive by the CSS specification.
export default function createBreakpoints(breakpoints) {
  const {
    values = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    unit = 'px',
    step = 5,
    ...other
  } = breakpoints;

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `(min-width:${value}${unit})`;
  }

  function down(key) {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      return up('xs');
    }

    const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return `(max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return (
      `(min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` +
      `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number'
        ? values[keys[endIndex + 1]]
        : end) -
        step / 100}${unit})`
    );
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
    ...other,
  };
}
