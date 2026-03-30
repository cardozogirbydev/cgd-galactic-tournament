package com.galactic_tournament.backend.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "species")
public class Species {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String name;

  @Min(value = 1)
  @Column(nullable = false)
  private Integer powerLevel;

  @Size(max = 100)
  private String specialAbility;

  @Column(nullable = false)
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
}