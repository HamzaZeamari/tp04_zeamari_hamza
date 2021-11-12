import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddAdresse, DelAdresse } from 'shared/actions/adresse-action';
import { Adresse } from 'shared/models/adresse';
import { AdresseState } from 'shared/states/adresse-state';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  adresseFormulaire!: FormGroup;
  @Select(AdresseState.getListeAdresses) adresses$!: Observable<Adresse[]>;

  constructor(private formBuilder: FormBuilder, private store: Store) { 
    this.adresseFormulaire = this.formBuilder.group({
      adresse: '',
      CP: '',
      ville: '',
    });
  }

  ngOnInit(): void {

  }

  addAdresse() {
    let adresse: string = this.adresseFormulaire.value['adresse'];
    let CP: string = this.adresseFormulaire.value['CP'];
    let ville: string = this.adresseFormulaire.value['ville'];

    if (adresse.trim() === "" || CP.trim() === "" || ville.trim() === "")
      return;

    let adress : Adresse = new Adresse();
    adress.adresse = adresse;
    adress.cp = CP;
    adress.ville = ville;

    this.adresseFormulaire = this.formBuilder.group({
      adresse: '',
      CP: '',
      ville: '',
    });

    this.store.dispatch(new AddAdresse(adress));
  }

  delAdresse(adresse : Adresse) {
    this.store.dispatch(new DelAdresse(adresse));
  }

}
