import { useApi } from "@/config/useApi";

const baseUrl = "/api";

class DataService {
  async appointments() {
    const response = await fetch(`${baseUrl}/appointments`);
    if (!response.ok) {
      throw new Error("Error fetching appointments");
    }
    return await response.json();
  }

  async doctors() {
    const response = await fetch(`${baseUrl}/doctors`);
    if (!response.ok) {
      throw new Error("Error fetching doctors");
    }
    return await response.json();
  }

  async clinics() {
    const response = await fetch(`${baseUrl}/clinics`);
    if (!response.ok) {
      throw new Error("Error fetching clinics");
    }
    return await response.json();
  }

  async profile() {
    const response = await fetch(`${baseUrl}/profile`);
    if (!response.ok) {
      throw new Error("Error fetching profile");
    }
    return await response.json();
  }

  async doctorById(id: string) {
    const response = await fetch(`${baseUrl}/doctor?id=${id}`);
    if (!response.ok) {
      throw new Error("Error fetching doctor");
    }
    return await response.json();
  }
}

export default new DataService();
