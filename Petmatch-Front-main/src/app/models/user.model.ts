export class User {
    _id?: string;
    fullName!: string;
    email!: string;
    password!: string;
    role!: 'manager' | 'user';

}