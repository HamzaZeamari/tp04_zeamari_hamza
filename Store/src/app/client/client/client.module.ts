import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './/client.component';
import { NgxsModule } from '@ngxs/store';
import { AdresseState } from 'shared/states/adresse-state';

const appChild: Routes = [
  {
      path: '',
      component: ClientComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,    
    NgxsModule.forFeature([AdresseState]),
  ],

  declarations: [
    ClientComponent
  ],
  providers: [],
})
export class ClientModule {}


