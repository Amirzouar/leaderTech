package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.entities.Sponsor;
import com.example.demo.repository.SponsorRepository;
@Controller
@CrossOrigin("*")
public class SponsoringController 
{
	@Autowired
	private SponsorRepository sponsorRepository;
	
	@GetMapping(value="/personne/all")
	@ResponseBody
	private List<Sponsor> findAll() {
		return sponsorRepository.findAll();
	}
	@PostMapping(value="/sponsor/all")
	@ResponseBody
	private Sponsor save(@RequestBody Sponsor sponsor) {
		return sponsorRepository.save(sponsor);
	}
}
