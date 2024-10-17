import { Clinic, Doctor } from "@/interfaces";

function getRandomDoctors(doctors: Doctor[], count: number): Doctor[] {
    const shuffled = [...doctors].sort(() => 0.5 - Math.random()); // Baraja los doctores
    return shuffled.slice(0, count); // Devuelve una cantidad aleatoria de doctores
}

// random clinic
function getRandomClinic(clinics: Clinic[]): Clinic {
    const randomIndex = Math.floor(Math.random() * clinics.length);
    return clinics[randomIndex];
}

function getRandomDoctor (doctors: Doctor[]): Doctor {
    const randomIndex = Math.floor(Math.random() * doctors.length);
    return doctors[randomIndex];
}

export { getRandomDoctors, getRandomClinic, getRandomDoctor };

  
