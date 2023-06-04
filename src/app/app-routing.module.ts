import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { PlanetListComponent } from './planet-list/planet-list.component';

const routes: Routes = [
  { path: '', component: PlanetListComponent },
  { path: 'planets/:id', component: PlanetDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
