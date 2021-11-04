import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddProduit } from 'shared/actions/produit-action';
import { Produit } from 'shared/models/produit';

@Component({
  selector: 'app-saisir-produit',
  templateUrl: './saisir-produit.component.html',
  styleUrls: ['./saisir-produit.component.css']
})
export class SaisirProduitComponent implements OnInit {

  produitForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.produitForm = this.formBuilder.group({
      nom: '',
      id: '',
      prix: '',
    });
  }

  ngOnInit() {}
  addProduit() {
    let nom: string = this.produitForm.value['nom'];
    let id: number = this.produitForm.value['id'];
    let prix: number = this.produitForm.value['prix'];

    let produit: Produit;

    produit = new Produit();
    produit.nom = nom;
    produit.id = id;
    produit.prix = prix;

    console.log(produit);
    this.produitForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      tel: '',
      favoris: false,
    });

    this.store.dispatch(new AddProduit(produit));
  }
}
