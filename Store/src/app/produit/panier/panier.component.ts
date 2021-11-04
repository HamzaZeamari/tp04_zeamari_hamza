import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DelProduit } from 'shared/actions/produit-action';
import { Produit } from 'shared/models/produit';
import { ProduitState } from 'shared/states/produits-state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  @Select(ProduitState.getListePanier)
  panier$!: Observable<Array<Produit>>;

  constructor(private store : Store) {}

  ngOnInit(): void {
  }

  DelPanier(c: Produit) {
    this.store.dispatch(new DelProduit(c));
  }

}
