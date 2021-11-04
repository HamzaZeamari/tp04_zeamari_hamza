import { Component, OnInit } from '@angular/core';
import { Produit } from 'shared/models/produit';
import { ProduitStateModel } from 'shared/states/produit-state-model';
import { ProduitState } from 'shared/states/produits-state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {


  constructor() {}

  @Select(ProduitState.getListeProduits) liste$!: Observable<Produit[]>;
  ngOnInit() {}

}
