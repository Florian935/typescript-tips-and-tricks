import { CoalescingOperatorComponent } from './coalescing-operator/coalescing-operator.component';
import { MappedTypesComponent } from './mapped-types/mapped-types.component';
import { KeyofTypescriptComponent } from './keyof-typescript/keyof-typescript.component';
import { PartialTypescriptTypeComponent } from './partial-typescript-type/partial-typescript-type.component';
import { GenericInstanciatorFunctionComponent } from './generic-instanciator-function/generic-instanciator-function.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'generic-instanciator-function', component: GenericInstanciatorFunctionComponent },
  { path: 'partial-type', component: PartialTypescriptTypeComponent },
  { path: 'keyof', component: KeyofTypescriptComponent },
  { path: 'mapped-types', component: MappedTypesComponent },
  { path: 'coalescing-operator', component: CoalescingOperatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
