const formatRp = (number?: number | string) => {
  const toNumber = Number(number || 0);

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(toNumber);
};

export default formatRp;
