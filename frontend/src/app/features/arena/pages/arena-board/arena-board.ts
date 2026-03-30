import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { SpeciesApi } from '@core/services/species-api';
import { CombatsApi } from '@features/arena/services/combats-api';
import type { CombatRequest } from '@core/models/combat.model';
import type { SpeciesResponse } from '@core/models/species.model';

@Component({
  selector: 'app-arena-board',
  imports: [],
  templateUrl: './arena-board.html',
})
export class ArenaBoard {
  private readonly speciesApi = inject(SpeciesApi);
  private readonly combatsApi = inject(CombatsApi);

  protected speciesResource = rxResource({
    stream: () => this.speciesApi.getAll()
  });

  protected fighterOne = signal<SpeciesResponse | null>(null);
  protected fighterTwo = signal<SpeciesResponse | null>(null);
  protected winner = signal<SpeciesResponse | null>(null);
  protected isFighting = signal(false);
  protected canFight = computed(() => this.fighterOne() && this.fighterTwo() && !this.isFighting());

  protected selectFighter(species:SpeciesResponse):void {
    if (this.isFighting()) return;

    if (this.fighterOne()?.id === species.id) {
      this.fighterOne.set(null);
      return;
    }

    if (this.fighterTwo()?.id === species.id) {
      this.fighterTwo.set(null);
      return;
    }

    if (!this.fighterOne()) {
      this.fighterOne.set(species);
      return;
    }

    if (!this.fighterTwo()) {
      this.fighterTwo.set(species);
      return;
    }
  }

  protected startCombat():void {
    const fighterOne = this.fighterOne();
    const fighterTwo = this.fighterTwo();

    if (!fighterOne || !fighterTwo) return;

    this.isFighting.set(true);
    this.winner.set(null);

    const combatRequest:CombatRequest = {
      speciesIdOne: fighterOne.id,
      speciesIdTwo: fighterTwo.id 
    }

    this.combatsApi.executeSpeciesCombat(combatRequest).subscribe({
      next: (response) => {
        this.winner.set(response);
      },
      error: (error) => {
        console.error('Ha ocurrido un error ejecutando el combate: ', error);
      },
      complete: () => {
        this.isFighting.set(false);
      }
    });
  }

  protected randomCombat(): void {
    const species = this.speciesResource.value() ?? [];

    if (species.length < 2) return;

    this.reset();

    const speciesIndexOne = Math.floor(Math.random() * species.length);
    const fighterOne = species[speciesIndexOne];

    let speciesIndexTwo:number;
    do {
      speciesIndexTwo = Math.floor(Math.random() * species.length);
    } while (speciesIndexOne === speciesIndexTwo);

    const fighterTwo = species[speciesIndexTwo];

    this.fighterOne.set(fighterOne);
    this.fighterTwo.set(fighterTwo);

    this.startCombat();
  }

  protected reset():void {
    this.fighterOne.set(null);
    this.fighterTwo.set(null);
    this.winner.set(null);
  }
}
