export class Pet {
    _id?: string;
    name!: string;
    species!: string;
    age!: number;
    specificNeeds?: string;
    userId!: string;
    image?: string;
}