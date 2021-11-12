import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from 'shared/models/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits!: Array<Produit>;
  produitsObs!: Observable<Array<Produit>>;

  constructor(private httpClient: HttpClient) {}

  public getProduitsObs(): Observable<Array<Produit>> {
    if (this.produitsObs == null) {
      this.produitsObs = this.httpClient.get<Array<Produit>>('assets/mock/produits.json');
      this.produitsObs.subscribe(
        produits => this.produits = produits
      );
    }    
    return this.produitsObs;
  }

  public getProduits() : Array<Produit> {
    return this.produits;
  }
}
