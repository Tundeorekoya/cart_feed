const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "NGN",
  style: "currency",
});

const formatCurrency = (number: number) => {
  return CURRENCY_FORMAT.format(number);
};

export default formatCurrency;
