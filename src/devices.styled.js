const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1440px',
  desktopL: '2100px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 1439px)`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};
