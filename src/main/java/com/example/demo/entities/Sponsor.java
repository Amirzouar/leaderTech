package com.example.demo.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Sponsor 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@Column
	private String nom;
	@Column
	private String prenom;
	@Column
	private String nomSte;
	@Column
	private String typeSponsoring;
	//@OneToMany(mappedBy="personne")
	//private List<Chien> chiens;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getNomSte() {
		return nomSte;
	}
	public void setNomSte(String nomSte) {
		this.nomSte = nomSte;
	}
	public String getTypeSponsoring() {
		return typeSponsoring;
	}
	public void setTypeSponsoring(String typeSponsoring) {
		this.typeSponsoring = typeSponsoring;
	}
	
	
	
}
