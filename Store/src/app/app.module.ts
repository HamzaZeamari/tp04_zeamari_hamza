import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit/produit.component';
import { NgxsModule } from '@ngxs/store';
import { ProduitState } from 'shared/states/produits-state';
import { RouterModule,Routes } from '@angular/router';
import { LiensComponent } from './liens/liens.component';

const appRoutes: Routes = [
  {
    path: 'produit',
    loadChildren: () =>
      import('./produit/produit.module').then((m) => m.ProduitsModule),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LiensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([ProduitState]),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
