// ? For passing colors like styled system
// eslint-disable-next-line import/prefer-default-export
export const getThemeColor = (theme, colorName) => {
  const colorSplit = colorName.split(".");
  return (
    colorSplit.reduce((total, current) => total?.[current], theme?.colors) ??
    colorName
  );
};
