export const NextArrow = (color?: string): string => {
  color = color?.indexOf('#') === -1 ? color : color?.substring(1, color.length);
  return `"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3E,%3Cpath stroke='%23${color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M7.5 15l5-5-5-5'/%3E,%3C/svg%3E"`;
};
