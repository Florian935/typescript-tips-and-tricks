import { KeyofTypescriptComponent } from './keyof-typescript/keyof-typescript.component';
import { PartialTypescriptTypeComponent } from './partial-typescript-type/partial-typescript-type.component';
import { GenericInstanciatorFunctionComponent } from './generic-instanciator-function/generic-instanciator-function.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'generic-instanciator-function', component: GenericInstanciatorFunctionComponent },
  { path: 'partial-type', component: PartialTypescriptTypeComponent },
  { path: 'keyof', component: KeyofTypescriptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
