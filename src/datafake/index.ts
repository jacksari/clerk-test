import { getRandomClinic, getRandomDoctor, getRandomDoctors } from "@/helpers";
import { Appointment, Clinic, Doctor, User } from "@/interfaces";

const doctors = [
  {
    id: 1,
    name: "Dr. Alice Smith",
    specialty: "Cardiology",
    clinicId: 1,
    clinicName: "Healthy Heart Clinic",
    profileImageUrl: `https://picsum.photos/200/300?random=${Math.random()}`,
    availableTimes: [
      {
        id: 1,
        date: "2024-10-18",
        time: "09:00",
        isAvailable: true,
      },
      {
        id: 2,
        date: "2024-10-18",
        time: "14:00",
        isAvailable: false,
      },
      {
        id: 3,
        date: "2024-10-19",
        time: "10:00",
        isAvailable: true,
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Bob Johnson",
    specialty: "Dermatology",
    clinicId: 1,
    clinicName: "Skin Care Clinic",
    profileImageUrl: `https://picsum.photos/200/300?random=${Math.random()}`,
    availableTimes: [
      {
        id: 4,
        date: "2024-10-19",
        time: "10:00",
        isAvailable: true,
      },
      {
        id: 5,
        date: "2024-10-20",
        time: "16:00",
        isAvailable: true,
      },
      {
        id: 6,
        date: "2024-10-21",
        time: "11:00",
        isAvailable: false,
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Clara Lee",
    specialty: "Pediatrics",
    clinicId: 2,
    clinicName: "Children's Health Clinic",
    profileImageUrl: `https://picsum.photos/200/300?random=${Math.random()}`,
    availableTimes: [
      {
        id: 7,
        date: "2024-10-18",
        time: "08:00",
        isAvailable: true,
      },
      {
        id: 8,
        date: "2024-10-18",
        time: "12:00",
        isAvailable: true,
      },
      {
        id: 9,
        date: "2024-10-19",
        time: "15:00",
        isAvailable: true,
      },
    ],
  },
  {
    id: 4,
    name: "Dr. Daniel Martinez",
    specialty: "Orthopedics",
    clinicId: 2,
    clinicName: "Joint Health Clinic",
    profileImageUrl: `https://picsum.photos/200/300?random=${Math.random()}`,
    availableTimes: [
      {
        id: 10,
        date: "2024-10-21",
        time: "09:30",
        isAvailable: true,
      },
      {
        id: 11,
        date: "2024-10-21",
        time: "13:00",
        isAvailable: true,
      },
      {
        id: 12,
        date: "2024-10-22",
        time: "10:00",
        isAvailable: false,
      },
    ],
  },
  {
    id: 5,
    name: "Dr. Elena Ruiz",
    specialty: "Psychiatry",
    clinicId: 3,
    clinicName: "Mental Health Center",
    profileImageUrl: `https://picsum.photos/200/300?random=${Math.random()}`,
    availableTimes: [
      {
        id: 13,
        date: "2024-10-19",
        time: "11:00",
        isAvailable: true,
      },
      {
        id: 14,
        date: "2024-10-20",
        time: "15:00",
        isAvailable: false,
      },
      {
        id: 15,
        date: "2024-10-22",
        time: "14:30",
        isAvailable: true,
      },
    ],
  },
  {
    id: 6,
    name: "Dr. Fernando García",
    specialty: "Ophthalmology",
    clinicId: 3,
    clinicName: "Vision Care Clinic",
    profileImageUrl: `https://picsum.photos/200/300?random=${Math.random()}`,
    availableTimes: [
      {
        id: 16,
        date: "2024-10-18",
        time: "09:00",
        isAvailable: true,
      },
      {
        id: 17,
        date: "2024-10-19",
        time: "11:30",
        isAvailable: true,
      },
      {
        id: 18,
        date: "2024-10-21",
        time: "16:00",
        isAvailable: false,
      },
    ],
  },
] as Doctor[];

const clinics = [
  {
    id: 1,
    name: "Healthy Heart Clinic",
    address: "123 Main Street, Cityville",
    doctors: doctors.filter((doctor) => doctor.clinicId === 1),
  },
  {
    id: 2,
    name: "Skin Care Clinic",
    address: "456 Oak Avenue, Townsville",
    doctors: doctors.filter((doctor) => doctor.clinicId === 2),
  },
  {
    id: 3,
    name: "Mental Health Center",
    address: "789 Pine Road, Healthville",
    doctors: doctors.filter((doctor) => doctor.clinicId === 3),
  },
] as Clinic[];

const appointments = [
  {
    id: 1,
    userId: 1,
    clinic: getRandomClinic(clinics),
    doctor: getRandomDoctor(doctors),
    date: "2024-10-18",
    time: "09:00",
    cost: 100,
    status: "confirmed",
  },
  {
    id: 2,
    userId: 1,
    clinic: getRandomClinic(clinics),
    doctor: getRandomDoctor(doctors),
    date: "2024-10-19",
    time: "10:00",
    cost: 150,
    status: "pending",
  },
] as Appointment[];

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    documentType: "DNI",
    documentNumber: "12345678",
    profileImageUrl: "https://example.com/images/john_doe.png",
    favoriteDoctors: getRandomDoctors(doctors, 4),
    appointments: appointments,
  },
] as User[];

export { doctors, clinics, appointments, users };
