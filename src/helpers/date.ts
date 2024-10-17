import { format, parse } from "date-fns";
import { es } from "date-fns/locale";

function formatDate(fecha: string): string {
  const date = new Date(fecha);
  return format(date, "d 'de' MMMM 'del' yyyy", { locale: es });
}

function formatHour(time: string): string {
  const parsedTime = parse(time, "HH:mm", new Date());
  return format(parsedTime, "hh:mm a");
}

export { formatDate, formatHour };
