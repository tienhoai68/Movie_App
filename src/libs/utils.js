export const FormatNumber = (number, currency = "USD") => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(number);
  return formattedNumber;
};

export const GENDER_MAPPING = {
  0: "Not set / not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};
