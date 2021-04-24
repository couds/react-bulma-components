export const normalizeAlign = (align) => {
  const map = {
    justify: 'justifyed',
    center: 'centered',
  };
  return map[align] || align;
};

export const normalizeStatus = (status) => {
  const map = {
    focus: 'focused',
    hover: 'hovered',
    active: 'active',
  };
  return map[status] || status;
};
