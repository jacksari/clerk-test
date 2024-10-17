
export function money(value: number): string {
  return value.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
  });
}
