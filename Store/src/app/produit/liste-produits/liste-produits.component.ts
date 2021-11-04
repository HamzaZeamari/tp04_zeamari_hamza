import { Component, OnInit } from '@angular/core';
import { Produit } from 'shared/models/produit';
import { ProduitStateModel } from 'shared/states/produit-state-model';
import { ProduitState } from 'shared/states/produits-state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { AddPanier } from 'shared/actions/produit-action';


@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {


  constructor(private store: Store) { }

  @Select(ProduitState.getListeProduits) liste$!: Observable<Produit[]>;
  ngOnInit() {
  }

  AddPanier(c: Produit) {
    this.store.dispatch(new AddPanier(c));
  }
}
