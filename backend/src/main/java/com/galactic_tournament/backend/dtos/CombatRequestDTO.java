package com.galactic_tournament.backend.dtos;

import jakarta.validation.constraints.NotNull;

public class CombatRequestDTO {
  
  @NotNull(message = "speciesIdOne es requerido")
  private Long speciesIdOne;

  @NotNull(message = "speciesIdTwo es requerido")
  private Long speciesIdTwo;

  public CombatRequestDTO() {}

  public Long getSpeciesIdOne() { return speciesIdOne; }
  public void setSpeciesIdOne(Long speciesIdOne) { this.speciesIdOne = speciesIdOne; }

  public Long getSpeciesIdTwo() { return speciesIdTwo; }
  public void setSpeciesIdTwo(Long speciesIdTwo) { this.speciesIdTwo = speciesIdTwo; }
}
