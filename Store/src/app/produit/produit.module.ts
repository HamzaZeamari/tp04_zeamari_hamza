import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';

import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ProduitComponent } from './produit/produit.component';
import { SaisirProduitComponent } from './saisir-produit/saisir-produit.component';

import { ProduitState } from '../../../shared/states/produits-state';
import { PanierComponent } from './panier/panier.component';
import { DetailComponent } from './detail/detail.component';

const appChild: Routes = [
  {
    path: 'listeProduits',
    component: ListeProduitsComponent,
  },
  {
    path: 'saisirProduit',
    component: SaisirProduitComponent,
  },

  {
    path: 'Produit/:id',
    component: DetailComponent,
  },
  {
    path: 'panier',
    component: PanierComponent,

  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
    NgxsModule.forFeature([ProduitState]),
  ],

  declarations: [
    ListeProduitsComponent,
    ProduitComponent,
    SaisirProduitComponent,
    PanierComponent,
    DetailComponent,

  ],
})
export class ProduitsModule {}
