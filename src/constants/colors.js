
const cardColors = [
  '#e6ffe6',
  '#ffe6cc',
  '#e6f7ff',
  '#ffe6e6',
];

export const getCardColor = idx => cardColors[idx % cardColors.length];
