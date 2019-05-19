const cardColors = [
  '#ffd1b3',
  '#c0d6ff',
  '#c4ffc4',
  '#ffc6ff',
];

export const getCardColor = idx => cardColors[idx % cardColors.length];
