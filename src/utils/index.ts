export const remCalc = (pxValue: number, baseFontSize: number = 14): string => {
  const remValue = pxValue / baseFontSize;
  return `${remValue}rem`;
}