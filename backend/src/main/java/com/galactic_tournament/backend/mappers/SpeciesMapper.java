package com.galactic_tournament.backend.mappers;

import org.springframework.stereotype.Component;

import com.galactic_tournament.backend.entities.Species;
import com.galactic_tournament.backend.dtos.SpeciesRequestDTO;
import com.galactic_tournament.backend.dtos.SpeciesResponseDTO;

@Component
public class SpeciesMapper {
  
  public Species toEntity(SpeciesRequestDTO request) {
    if (request == null) return null;

    Species species = new Species();
    species.setName(request.getName());
    species.setPowerLevel(request.getPowerLevel());
    species.setSpecialAbility(request.getSpecialAbility());

    return species;
  }

  public SpeciesResponseDTO toResponseDTO(Species entity) {
    if (entity == null) return null;

    SpeciesResponseDTO response = new SpeciesResponseDTO();
    response.setId(entity.getId());
    response.setName(entity.getName());
    response.setPowerLevel(entity.getPowerLevel());
    response.setSpecialAbility(entity.getSpecialAbility());
    response.setVictories(entity.getVictories());

    return response;
  }
}
