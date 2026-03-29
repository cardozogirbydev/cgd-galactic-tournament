package com.galactic_tournament.backend.dtos;

public class SpeciesResponseDTO {
  
  private Long id;
  private String name;
  private Integer powerLevel;
  private String specialAbility;
  private Integer victories;

  public SpeciesResponseDTO() {}

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
}
