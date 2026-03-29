package com.galactic_tournament.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.galactic_tournament.backend.entities.Species;

@Repository
public interface SpeciesRepository extends JpaRepository<Species, Long> {
  
  List<Species> findAllByOrderByVictoriesDesc();
}
