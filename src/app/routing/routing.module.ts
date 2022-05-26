import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionesComponent } from '../componentes/direcciones/direcciones.component';

const routes: Routes = [
  {
    path: ''
  },
  {
    path: 'direcciones',
    component: DireccionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
