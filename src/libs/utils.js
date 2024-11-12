export const FormatNumber = (number, currency = "USD") => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(number);
  return formattedNumber;
};
