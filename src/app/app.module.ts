import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericInstanciatorFunctionComponent } from './generic-instanciator-function/generic-instanciator-function.component';
import { PartialTypescriptTypeComponent } from './partial-typescript-type/partial-typescript-type.component';
import { KeyofTypescriptComponent } from './keyof-typescript/keyof-typescript.component';
import { MappedTypesComponent } from './mapped-types/mapped-types.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericInstanciatorFunctionComponent,
    PartialTypescriptTypeComponent,
    KeyofTypescriptComponent,
    MappedTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
