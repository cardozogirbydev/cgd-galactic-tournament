import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

import { SpeciesApi } from '@core/services/species-api';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  private readonly speciesApi = inject(SpeciesApi);

  speciesResource = rxResource({
    stream: () => this.speciesApi.getAll()
  });
}
