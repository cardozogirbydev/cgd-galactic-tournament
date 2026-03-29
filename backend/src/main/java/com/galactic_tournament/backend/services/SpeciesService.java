package com.galactic_tournament.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galactic_tournament.backend.dtos.SpeciesRequestDTO;
import com.galactic_tournament.backend.dtos.SpeciesResponseDTO;
import com.galactic_tournament.backend.entities.Species;
import com.galactic_tournament.backend.mappers.SpeciesMapper;
import com.galactic_tournament.backend.repositories.SpeciesRepository;

@Service
public class SpeciesService {
  
  @Autowired
  private SpeciesRepository speciesRepository;

  @Autowired
  private SpeciesMapper speciesMapper;

  public List<SpeciesResponseDTO> getAll() {
    return speciesRepository.findAll()
      .stream()
      .map(speciesMapper::toResponseDTO)
      .collect(Collectors.toList());
  }

  public List<SpeciesResponseDTO> getRanking() {
    return speciesRepository.findAllByOrderByVictoriesDesc()
      .stream()
      .map(speciesMapper::toResponseDTO)
      .collect(Collectors.toList());
  }

  public SpeciesResponseDTO create(SpeciesRequestDTO request) {
    Species entity = speciesMapper.toEntity(request);
    Species speciesSaved = speciesRepository.save(entity);

    return speciesMapper.toResponseDTO(speciesSaved);
  }
}
