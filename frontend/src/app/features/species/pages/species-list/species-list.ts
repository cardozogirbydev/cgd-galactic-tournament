import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

import { SpeciesApi } from '@core/services/species-api';

@Component({
  selector: 'app-species-list',
  imports: [RouterLink],
  templateUrl: './species-list.html',
})
export class SpeciesList {
  private readonly speciesApi = inject(SpeciesApi);

  speciesResource = rxResource({
    stream: () => this.speciesApi.getAll()
  });

  reload():void {
    this.speciesResource.reload();
  }
}
