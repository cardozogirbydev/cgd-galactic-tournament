package com.galactic_tournament.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.galactic_tournament.backend.dtos.SpeciesResponseDTO;
import com.galactic_tournament.backend.services.CombatsService;

@RestController
@RequestMapping("/api/combats")
@CrossOrigin(origins = "http://localhost:4200")
public class CombatsController {

  @Autowired
  private CombatsService combatsService;

  @PostMapping("/{specieIdOne}/{specieIdTwo}")
  public SpeciesResponseDTO startCombat(@PathVariable Long specieIdOne, @PathVariable Long specieIdTwo) {
    return combatsService.executeCombat(specieIdOne, specieIdTwo);
  }
}
