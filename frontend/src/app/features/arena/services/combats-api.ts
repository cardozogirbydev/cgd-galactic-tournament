import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import type { CombatRequest } from '@core/models/combat.model';
import type { SpeciesResponse } from '@core/models/species.model';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CombatsApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${API_URL}/combats`;

  executeSpeciesCombat(request:CombatRequest):Observable<SpeciesResponse> {
    return this.http.post<SpeciesResponse>(this.baseUrl, request);
  }
}
