export function formatCurrency(valueInitial: string): string {
  let value: number = Number(valueInitial);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatDate(dateInitial: string | undefined): string {
  if (!dateInitial) {
    return "";
  }

  let date: Date = new Date(dateInitial);

  const day = padTo2Digits(date.getDate());
  const month = padTo2Digits(date.getMonth() + 1); // Months are zero-based
  const year = date.getFullYear();
  const hours = padTo2Digits(date.getHours());
  const minutes = padTo2Digits(date.getMinutes());
  const seconds = padTo2Digits(date.getSeconds());

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function padTo2Digits(num: number): string {
  return num.toString().padStart(2, "0");
}
