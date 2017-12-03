package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Sponsor;
@Repository
public interface SponsorRepository extends JpaRepository<Sponsor, Long>{
	
}
