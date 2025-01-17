import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adoption } from '../models/adoption.model';

@Injectable({
    providedIn: 'root',
})
export class AdoptionService {
    private baseUrl = 'http://localhost:3000/adoptions';

    constructor(private http: HttpClient) { }

    createAdoption(adoptionData: any): Observable<Adoption> {
        return this.http.post<Adoption>(this.baseUrl, adoptionData);
    }

    updateAdoptionStatus(adoptionId: string, status: string): Observable<Adoption> {
        return this.http.put<Adoption>(`${this.baseUrl}/${adoptionId}/status`, { status });
    }
    getAllAdoptions(): Observable<Adoption[]> {
        return this.http.get<Adoption[]>(this.baseUrl); // Fetches the list of all adoptions
    }
}
