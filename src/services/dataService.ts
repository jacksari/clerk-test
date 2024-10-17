import { useApi } from "@/config/useApi";

const baseUrl = "/api";

class DataService {
  async appointments(): Promise<any> {
    const data = useApi(`${baseUrl}/appointments`);

    return data;
  }

  async doctors(): Promise<any> {
    const data = useApi(`${baseUrl}/doctors`);

    return data;
  }

  async clinics(): Promise<any> {
    const data = useApi(`${baseUrl}/clinics`);

    return data;
  }

  async profile(): Promise<any> {
    const data = useApi(`${baseUrl}/profile`);

    return data;
  }
}

export default new DataService();
