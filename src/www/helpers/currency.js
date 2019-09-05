/* eslint import/prefer-default-export: "off" */
/* eslint security/detect-unsafe-regex: "off" */

export const setLocalCurrency = value => (
  `R$ ${value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.')}`
);
