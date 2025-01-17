export class Appointment {
    _id?: string;
    title!: string;
    note?: string;
    date!: string;
    time!: string;
    petId!: { _id: string, name: string };
    userId!: { _id: string, fullName: string };
    status!: 'onhold' | 'accepted';
}