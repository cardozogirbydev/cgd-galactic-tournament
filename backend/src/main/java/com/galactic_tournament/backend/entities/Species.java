package com.galactic_tournament.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Species {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank(message = "El nombre es obligatorio")
  private String name;

  @Min(value = 1, message = "El nivel de poder debe ser al menos 1")
  private Integer powerLevel;

  private String specialAbility;

  private Integer victories = 0;

  public Species() {}

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }

  public Integer getPowerLevel() { return powerLevel; }
  public void setPowerLevel(Integer powerLevel) { this.powerLevel = powerLevel; }

  public String getSpecialAbility() { return specialAbility; }
  public void setSpecialAbility(String specialAbility) { this.specialAbility = specialAbility; }

  public Integer getVictories() { return victories; }
  public void setVictories(Integer victories) { this.victories = victories; }
};