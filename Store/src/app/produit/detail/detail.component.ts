import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddProduit } from 'shared/actions/produit-action';
import { Produit } from 'shared/models/produit';
import { ProduitService } from 'src/produit.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  produit: Produit;
  id : number;
  constructor(private route : ActivatedRoute, private produitService: ProduitService, private store : Store) { 
    this.id = this.route.snapshot.params['id'];
    this.produit = this.produitService.getProduits().filter(produit => produit.id == this.id)[0];
  }

  ngOnInit(): void {
  }

  addproduit(detail: Produit) {
    this.store.dispatch(new AddProduit(detail));
  }

}
