package com.galactic_tournament.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galactic_tournament.backend.dtos.SpeciesResponseDTO;
import com.galactic_tournament.backend.entities.Species;
import com.galactic_tournament.backend.mappers.SpeciesMapper;
import com.galactic_tournament.backend.repositories.SpeciesRepository;

@Service
public class CombatsService {

  @Autowired
  private SpeciesRepository speciesRepository;

  @Autowired
  private SpeciesMapper speciesMapper;

  public SpeciesResponseDTO executeCombat(Long idOne, Long idTwo) {
    Species specieOneEntity = speciesRepository.findById(idOne).orElseThrow(() -> new RuntimeException("No se encontró la especie: " + idOne));
    Species specieTwoEntity = speciesRepository.findById(idTwo).orElseThrow(() -> new RuntimeException("No se encontró la especie: " + idTwo));
    Species winnerEntity = null;

    if (specieOneEntity.getPowerLevel() > specieTwoEntity.getPowerLevel()) {
      winnerEntity = specieOneEntity;
    } else if (specieTwoEntity.getPowerLevel() > specieOneEntity.getPowerLevel()) {
      winnerEntity = specieTwoEntity;
    } else {
      if (specieOneEntity.getName().compareToIgnoreCase(specieTwoEntity.getName()) < 0) {
        winnerEntity = specieOneEntity;
      } else {
        winnerEntity = specieTwoEntity;
      }
    }

    winnerEntity.setVictories(winnerEntity.getVictories() + 1);
    Species winner = speciesRepository.save(winnerEntity);

    return speciesMapper.toResponseDTO(winner);
  }
}
