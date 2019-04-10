import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasificacionComponent } from './componentes/clasificacion/clasificacion.component';
import { CalendarioComponent } from './componentes/calendario/calendario.component';
import { CircuitosComponent } from './componentes/circuitos/circuitos.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'clasificacion', component: ClasificacionComponent
  },
  {
    path: 'calendario', component: CalendarioComponent
  },
  {
    path: 'circuitos', component: CircuitosComponent
  },
  {
    path:'', pathMatch: 'full', redirectTo: 'home'
  },
  {
    path:'**', pathMatch: 'full', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
