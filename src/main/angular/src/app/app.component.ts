import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AccountService} from "./account/shared/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Hospital';

  mostrarMenu: boolean = false;

  usuarioLogado = false;
  constructor(loggedService: AccountService) {
    // Efetuamos a subscrição para ser notificado
    // toda vez que o usuário fizer login/logout
    if (loggedService.isUserLoggedIn())
      this.usuarioLogado = loggedService.isUserLoggedIn();
  }

}
