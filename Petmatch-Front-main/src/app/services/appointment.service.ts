import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({
    providedIn: 'root',
})
export class AppointmentService {
    private baseUrl = 'http://localhost:3000/appointments';

    constructor(private http: HttpClient) { }

    getAllAppointments(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(this.baseUrl);
    }

    createAppointment(appointmentData: any): Observable<Appointment> {
        return this.http.post<Appointment>(this.baseUrl, appointmentData);
    }

    updateAppointmentStatus(appointmentId: string, status: string, date: string, time: string): Observable<Appointment> {
        const body = { status, date, time };
        return this.http.put<Appointment>(`${this.baseUrl}/${appointmentId}/status`, body);
    }

    // Method to delete an appointment by its ID
    deleteAppointment(appointmentId: string): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${appointmentId}`);
    }
}
