import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';

@Injectable({
    providedIn: 'root',
})
export class PetService {
    private baseUrl = 'http://localhost:3000/pets';

    constructor(private http: HttpClient) { }

    createPet(petData: FormData): Observable<Pet> {
        return this.http.post<Pet>(this.baseUrl, petData);
    }

    getPetsByUserId(userId: string): Observable<Pet[]> {
        return this.http.get<Pet[]>(`${this.baseUrl}/${userId}`);
    }

    getAllPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>(this.baseUrl);
    }

    updatePetOwner(petId: string, newOwnerId: string): Observable<Pet> {
        const body = { petId, newOwnerId };  // Construct the body with petId and newOwnerId
        return this.http.put<Pet>(`${this.baseUrl}/owner`, body);  // Send the request to the backend
    }

    updatePet(petId: string, petData: FormData): Observable<Pet> {
        return this.http.put<Pet>(`${this.baseUrl}/${petId}`, petData);
    }
    deletePet(petId: string): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${petId}`);
    }
}
