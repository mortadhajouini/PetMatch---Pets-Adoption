export class Adoption {
    _id?: string;
    userId!: { _id: string, fullName: string };
    petId!: { _id: string, name: string, species: string, image: string };
    date!: string;
    status!: 'onhold' | 'accepted' | 'refused';
}