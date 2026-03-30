package com.galactic_tournament.backend.dtos;

import jakarta.validation.constraints.*;

public class SpeciesRequestDTO {
  
  @NotBlank(message = "El nombre es requerido")
  private String name;

  @NotNull(message = "El nivel de poder es requerido")
  @Min(value = 1, message = "El nivel de poder debe ser al menos 1")
  private Integer powerLevel;

  @Size(max = 100, message = "La habilidad especial no puede exceder los 100 caracteres")
  private String specialAbility;

  public SpeciesRequestDTO() {}

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }

  public Integer getPowerLevel() { return powerLevel; }
  public void setPowerLevel(Integer powerLevel) { this.powerLevel = powerLevel; }

  public String getSpecialAbility() { return specialAbility; }
  public void setSpecialAbility(String specialAbility) { this.specialAbility = specialAbility; }
}
