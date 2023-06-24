import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipodocumentoComponent } from './components/tipodocumento/tipodocumento.component';
import { AddComponent } from './components/tipodocumento/add/add.component';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { AddProcesoComponent } from './components/proceso/add-proceso/add-proceso.component';

const routes: Routes = [
  {
    path: 'tipodoc',
    component: TipodocumentoComponent,
  },
  {
    path: 'tipodocadd',
    component: AddComponent,
  },
  {
    path: 'tipodocadd/:id',
    component: AddComponent,
  },
  {
    path: 'proceso',
    component: ProcesoComponent,
  },
  {
    path: 'add-proceso',
    component: AddProcesoComponent,
  },
  {
    path: 'edit-proceso/:id',
    component: AddProcesoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
