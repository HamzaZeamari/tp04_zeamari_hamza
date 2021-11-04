import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddProduit , DelProduit, AddPanier} from '../actions/produit-action';
import { ProduitStateModel } from './produit-state-model';
@State<ProduitStateModel>({
  name: 'produits',
  defaults: {
    produits: [],
    panier: [],
  },
})
@Injectable()
export class ProduitState {
  @Selector()
  static getNbProduits(state: ProduitStateModel) {
    return state.produits.length;
  }
  @Selector()
  static getListeProduits(state: ProduitStateModel) {
    return state.produits;
  }
  @Selector()
  static getListePanier(state: ProduitStateModel) {
    return state.panier;
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      produits: [...state.produits, payload],
    });
  }
  
  @Action(AddPanier)
  addPanier(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: AddPanier
  ) {
    const state = getState();
    patchState({
      panier: [...state.panier, payload],
    });
  }
  

  @Action(DelProduit)
  del(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: DelProduit
  ) {
    const state = getState();
    patchState({
      panier: state.panier.filter((produit)=>{produit.id != payload.id}),
    });
  }
}
