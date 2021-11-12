import { Produit } from '../models/produit';

export class AddProduit {
  static readonly type = '[Produit] Add';

  constructor(public payload: Produit) {}
}

export class DelProduit {
  static readonly type = '[Produit] Del';

  constructor(public payload: Produit) {}
}

export class DelPanier {
  static readonly type = '[Produit] DelPanier';

  constructor(public payload: Produit) {}
}

export class AddPanier {
  static readonly type = '[Produit] AddPanier';

  constructor(public payload: Produit) {}
}