package com.galactic_tournament.backend.controllers;

import java.util.List;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.galactic_tournament.backend.dtos.SpeciesRequestDTO;
import com.galactic_tournament.backend.dtos.SpeciesResponseDTO;
import com.galactic_tournament.backend.services.SpeciesService;

@RestController
@RequestMapping("/api/species")
@CrossOrigin(origins = "http://localhost:4200")
public class SpeciesController {

  @Autowired
  private SpeciesService speciesService;

  @GetMapping
  public List<SpeciesResponseDTO> getAll() {
    return speciesService.getAll();
  }

  @GetMapping("/ranking")
  public List<SpeciesResponseDTO> getRanking() {
    return speciesService.getRanking();
  }

  @PostMapping
  public SpeciesResponseDTO create(@Valid @RequestBody SpeciesRequestDTO request) {
    return speciesService.create(request);
  }
}
