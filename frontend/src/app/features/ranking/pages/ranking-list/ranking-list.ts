import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { SpeciesApi } from '@core/services/species-api';

@Component({
  selector: 'app-ranking-list',
  imports: [],
  templateUrl: './ranking-list.html',
})
export class RankingList {
  private readonly speciesApi = inject(SpeciesApi);

  rankingResource = rxResource({
    stream: () => this.speciesApi.getRanking()
  });

  topThreeSpecies = computed(() => {
    const ranking = this.rankingResource.value() ?? [];

    return ranking.slice(0, 3);
  });
  othersSpecies = computed(() => {
    const ranking = this.rankingResource.value() ?? [];

    return ranking.slice(3);
  });
}
