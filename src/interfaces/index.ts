export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  documentType: string;
  documentNumber: string;
  profileImageUrl?: string;
  favoriteDoctors: Doctor[];
  appointments: Appointment[];
}

export interface Appointment {
  id: number;
  userId: number;
  doctor: Doctor;
  clinic: Clinic;
  date: string; // Formato 'YYYY-MM-DD'
  time: string; // Formato 'HH:mm'
  cost: number;
  status: "confirmed" | "pending" | "cancelled";
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  clinicId: number;
  clinicName: string;
  profileImageUrl?: string;
  availableTimes: AvailableTime[];
}

export interface Clinic {
  id: number;
  name: string;
  address: string;
  doctors: Doctor[];
}

export interface AvailableTime {
  id: number;
  date: string; // Formato 'YYYY-MM-DD'
  time: string; // Formato 'HH:mm'
  isAvailable: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
  provider?: "google" | "facebook"; // Opcional para login social
}

export interface CreateAppointmentRequest {
  userId: number;
  doctorId: number;
  clinicId: number;
  date: string; // Formato 'YYYY-MM-DD'
  time: string; // Formato 'HH:mm'
}

export interface CreateAppointmentRequest {
  userId: number;
  doctorId: number;
  clinicId: number;
  date: string; // Formato 'YYYY-MM-DD'
  time: string; // Formato 'HH:mm'
}


export interface IResponseGetClinics {
  data: Clinic[];
  status: boolean;
  message: string;
}

export interface IResponseGetProfile {
  data: User;
  status: boolean;
  message: string;
}