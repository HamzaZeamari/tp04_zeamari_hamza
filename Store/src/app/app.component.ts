import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProduitState } from 'shared/states/produits-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';

  @Select(ProduitState.getNbProduits) nb$!: Observable<number>;
  constructor() {}
}
