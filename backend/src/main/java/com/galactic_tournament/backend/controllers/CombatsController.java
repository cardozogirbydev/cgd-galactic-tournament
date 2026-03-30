package com.galactic_tournament.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import com.galactic_tournament.backend.dtos.CombatRequestDTO;
import com.galactic_tournament.backend.dtos.SpeciesResponseDTO;
import com.galactic_tournament.backend.services.CombatsService;


@RestController
@RequestMapping("/api/combats")
@CrossOrigin(origins = "http://localhost:4200")
public class CombatsController {

  @Autowired
  private CombatsService combatsService;

  @PostMapping
  public SpeciesResponseDTO startCombat(@Valid @RequestBody CombatRequestDTO request) {
    return combatsService.executeSpeciesCombat(request.getSpeciesIdOne(), request.getSpeciesIdTwo());
  }
}
