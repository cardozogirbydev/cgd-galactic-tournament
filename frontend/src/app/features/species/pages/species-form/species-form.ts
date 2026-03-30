import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { SpeciesApi } from '@core/services/species-api';
import { SpeciesRequest } from '../../../../core/models/species.model';

@Component({
  selector: 'app-species-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './species-form.html',
})
export class SpeciesForm {
  private readonly speciesApi = inject(SpeciesApi);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    powerLevel: [0, [Validators.required, Validators.min(1)]],
    specialAbility: ['', [Validators.maxLength(100)]]
  });

  isSaving = signal(false);

  save():void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSaving.set(true);

    const formData:SpeciesRequest = this.form.getRawValue();

    this.speciesApi.create(formData).subscribe({
      next: () => {
        this.router.navigate(['/species']);
      },
      error: (error) => {
        console.error('Ha ocurrido un error guardando la especie: ', error);
      },
      complete: () => {
        this.isSaving.set(false);
      }
    });
  }
}
