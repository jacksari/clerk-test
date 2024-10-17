import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function formatDate(fecha: string): string {
  const date = new Date(fecha);
  return format(date, "d 'de' MMMM 'del' yyyy", { locale: es });
}

export { formatDate };