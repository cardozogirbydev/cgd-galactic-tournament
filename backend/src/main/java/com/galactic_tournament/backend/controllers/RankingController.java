package com.galactic_tournament.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.galactic_tournament.backend.dtos.SpeciesResponseDTO;
import com.galactic_tournament.backend.services.SpeciesService;

@RestController
@RequestMapping("/api/ranking")
@CrossOrigin(origins = "http://localhost:4200")
public class RankingController {

  @Autowired
  private SpeciesService speciesService;
  
  @GetMapping()
  public List<SpeciesResponseDTO> getRanking() {
    return speciesService.getRanking();
  }
}
