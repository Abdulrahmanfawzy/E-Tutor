export const formatCurrency = (value: number): string => `$${value}`;

export const formatCompact = (value: number): string =>
  new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);

export const formatNumber = (value: number): string =>
  new Intl.NumberFormat("en").format(value);