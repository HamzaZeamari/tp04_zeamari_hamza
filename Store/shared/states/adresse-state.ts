import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddAdresse, DelAdresse } from '../actions/adresse-action';
import { AdresseStateModel } from './adresse-state-model';

@State<AdresseStateModel>({
  name: 'adresses',
  defaults: {
    adresses: [],
  },
})

@Injectable()
export class AdresseState {
  @Selector()
  static getNbAdresses(state: AdresseStateModel) {
    return state.adresses.length;
  }
  @Selector()
  static getListeAdresses(state: AdresseStateModel) {
    return state.adresses;
  }

  @Action(AddAdresse)
  add(
    { getState, patchState }: StateContext<AdresseStateModel>,
    { payload }: AddAdresse
  ) {
    const state = getState();
    patchState({
      adresses: [...state.adresses, payload],
    });
  }

  @Action(DelAdresse)
  del(
    { getState, patchState }: StateContext<AdresseStateModel>,
    { payload }: DelAdresse
  ) {
    const state = getState();
    patchState({
      adresses: state.adresses.filter(adresse => adresse.adresse != payload.adresse && adresse.cp != payload.cp),
    });
  }
}
