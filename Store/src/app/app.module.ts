import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit/produit.component';
import { NgxsModule } from '@ngxs/store';
import { ProduitState } from 'shared/states/produits-state';
import { RouterModule,Routes } from '@angular/router';
import { LiensComponent } from './liens/liens.component';
import { ClientComponent } from './client/client/client.component';

const appRoutes: Routes = [
  {
    path: 'produit',
    loadChildren: () =>
      import('./produit/produit.module').then((m) => m.ProduitsModule),
  },
  {
    path: 'client',
    loadChildren: () => 
      import('./client/client/client.module').then((m) => m.ClientModule),
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
    FormsModule,
    NgxsModule.forRoot([ProduitState]),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
