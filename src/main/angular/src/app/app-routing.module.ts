import {PacienteUpdateComponent} from './components/paciente/paciente-update/paciente-update.component';
import {PacienteDeleteComponent} from './components/paciente/paciente-delete/paciente-delete.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./view/home/home.component";
import {PacienteCrudComponent} from "./view/paciente-crud/paciente-crud.component";
import {AuthGuard} from "./account/shared/auth.guard";
import {AuthenticationComponent} from "./layout/authentication/authentication.component";
import {LoginComponent} from "./account/login/login.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },  {
    path: "paciente",
    component: PacienteCrudComponent,
    canActivate: [AuthGuard]
  }, {
    path: "paciente/update/:id",
    component: PacienteUpdateComponent,
    canActivate: [AuthGuard]
  }, {
    path: "paciente/delete/:id",
    component: PacienteDeleteComponent,
    canActivate: [AuthGuard]
  },{
    path: '',
    component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
