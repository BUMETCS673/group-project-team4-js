export interface Medicine {
    key: string;
    quantity: number;
}

export interface DrugItem {
    key: string;
    name: string;
    price: number;
    img: string;
}

export interface Prescription {
    patientFirstName: string;
    patientMiddleName: string;
    patientLastName: string;
    patientDateOfBirth: string;
    patientPrescriptionExpiration: string;
    patientEmail: string;
    patientPhoneNumber: string;
    mediciens: Medicine[];
}