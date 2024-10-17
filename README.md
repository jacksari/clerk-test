# Proyecto Next.js

Este proyecto utiliza Next.js junto con Clerk para la autenticación, y APIs de Next.js para manejar datos estáticos simulados.

## Requisitos

- Node.js versión 20 o superior.

## Instrucciones de instalación

1. Clona el repositorio:

```bash
git clone https://github.com/jacksari/clerk-test.git
cd clerk-test
```


2. Instala las dependencias:

```bash
npm install 
```

3. Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZGl2ZXJzZS1kdWNrLTIyLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_Q1dUEneAIArvCdDAUMNWudauWlrBxag8FVmczzDOqg
```

4. Para iniciar el proyecto en modo desarrollo:

```bash
npm run dev
```

5. Para compilar el proyecto localmente:

```bash
npm run build
```

# Despliegue en Vercel

Cuando despliegues el proyecto en Vercel, asegúrate de agregar las variables de entorno mencionadas arriba (NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY y CLERK_SECRET_KEY) en la configuración del proyecto de Vercel.

# Datos Simulados y APIs
Este proyecto utiliza datos estáticos simulados (fake data) y las APIs de Next.js para simular interacciones de datos. Los endpoints de la API están ubicados en /api, y puedes ver los servicios de datos que interactúan con estas APIs en el archivo DataService.

# APIs Disponibles
Las siguientes APIs se utilizan para obtener datos simulados:

- /api/appointments: Obtiene las citas.
- /api/doctors: Obtiene los médicos.
- /api/clinics: Obtiene las clínicas.
- /api/profile: Obtiene el perfil del usuario.
- /api/doctor?id={id}: Obtiene un médico específico por ID.


# Ejemplo del Servicio de Datos

```typescript
Copy code
import { useApi } from "@/config/useApi";

const baseUrl = "/api";

class DataService {
  async appointments(): Promise<any> {
    const response = await fetch(`${baseUrl}/appointments`);
    if (!response.ok) {
      throw new Error('Error fetching appointments');
    }
    return await response.json();
  }

  async doctors(): Promise<any> {
    const response = await fetch(`${baseUrl}/doctors`);
    if (!response.ok) {
      throw new Error('Error fetching doctors');
    }
    return await response.json();
  }

  async clinics(): Promise<any> {
    const response = await fetch(`${baseUrl}/clinics`);
    if (!response.ok) {
      throw new Error('Error fetching clinics');
    }
    return await response.json();
  }

  async profile(): Promise<any> {
    const response = await fetch(`${baseUrl}/profile`);
    if (!response.ok) {
      throw new Error('Error fetching profile');
    }
    return await response.json();
  }

  async doctorById(id: string): Promise<any> {
    const response = await fetch(`${baseUrl}/doctor?id=${id}`);
    if (!response.ok) {
      throw new Error('Error fetching doctor');
    }
    return await response.json();
  }
}

export default new DataService();
```





