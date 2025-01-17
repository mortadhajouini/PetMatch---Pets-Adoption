import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {


    private baseUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) { }

    createUser(userData: User): Observable<User> {
        return this.http.post<User>(this.baseUrl, userData);
    }

    login(user: User): Observable<any> {
        console.log(user);
        const email = user.email;
        const password = user.password;

        const body = { email, password };
        return this.http.post<User>(`${this.baseUrl}/login`, body);
    }

    changeUserNameByEmail(email: string, newFullName: string): Observable<any> {
        const body = { email, newFullName }; // Prepare the body with the email and new name
        return this.http.put<any>(`${this.baseUrl}/change-name`, body); // Call the backend API
    }

    changePassword(email: string, currentPassword: string, newPassword: string): Observable<any> {
        const body = { email, currentPassword, newPassword };
        return this.http.put<any>(`${this.baseUrl}/change-password`, body);
    }
}
