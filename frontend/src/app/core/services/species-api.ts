import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import type { SpeciesResponse, SpeciesRequest } from '@core/models/species.model';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class SpeciesApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${API_URL}/species`;

  getAll():Observable<SpeciesResponse[]> {
    return this.http.get<SpeciesResponse[]>(this.baseUrl);
  }

  getRanking():Observable<SpeciesResponse[]> {
    const url = `${this.baseUrl}/ranking`;
    
    return this.http.get<SpeciesResponse[]>(url);
  }

  create(request:SpeciesRequest):Observable<SpeciesResponse> {
    return this.http.post<SpeciesResponse>(this.baseUrl, request);
  }
}
