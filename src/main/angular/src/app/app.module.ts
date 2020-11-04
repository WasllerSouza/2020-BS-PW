// Angular
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// APP
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// View
import {HomeComponent} from './view/home/home.component';
import {PacienteCrudComponent} from './view/paciente-crud/paciente-crud.component';

// Componentes paciente
import {PacienteCreateComponent} from './components/paciente/paciente-create/paciente-create.component';
import {PacienteReadComponent} from './components/paciente/paciente-read/paciente-read.component';
import {PacienteRead2Component} from './components/paciente/paciente-read2/paciente-read2.component';
import {PacienteUpdateComponent} from './components/paciente/paciente-update/paciente-update.component';
import {PacienteDeleteComponent} from './components/paciente/paciente-delete/paciente-delete.component';

// Componentes Template
import {HeaderComponent} from './components/template/header/header.component';
import {FooterComponent} from './components/template/footer/footer.component';
import {NavComponent} from './components/template/nav/nav.component';
import {HeaderService} from './components/template/header/header.service'
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {NgxMaskModule} from 'ngx-mask';
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {PacienteReadService} from "./components/paciente/paciente-read/paciente-read.service";

// Componentes Account
import {LoginComponent} from './account/login/login.component';
import {AuthenticationComponent} from "./layout/authentication/authentication.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PacienteCrudComponent,
    PacienteCreateComponent,
    PacienteReadComponent,
    PacienteRead2Component,
    PacienteUpdateComponent,
    PacienteDeleteComponent,
    LoginComponent,
    AuthenticationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
    MatIconModule,
    MatExpansionModule,
    DragDropModule,
  ],
  providers: [
    HeaderService,
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    { provide: LOCALE_ID, useValue: "pt-BR" },
    PacienteReadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
