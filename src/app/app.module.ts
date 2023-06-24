import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProcesoComponent } from './components/proceso/proceso.component';
import { TipodocumentoComponent } from './components/tipodocumento/tipodocumento.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { AddComponent } from './components/tipodocumento/add/add.component';
import { EditComponent } from './components/tipodocumento/edit/edit.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddProcesoComponent } from './components/proceso/add-proceso/add-proceso.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProcesoComponent,
    TipodocumentoComponent,
    DocumentoComponent,
    AddComponent,
    EditComponent,
    AddProcesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
