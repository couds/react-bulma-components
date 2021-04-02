export const normalizeAlign = (align) => {
  if (align === 'center') {
    return 'centered';
  }
  if (align === 'justify') {
    return 'justifyed';
  }
  return align;
};
