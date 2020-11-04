import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente.model';
import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {PacienteReadService} from "./paciente-read.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-paciente-read',
  templateUrl: './paciente-read.component.html',
  styleUrls: ['./paciente-read.component.scss']
})
export class PacienteReadComponent implements OnInit {

  pacientes: Paciente[];
  busyGetUser: Subscription;


  displayedColumns = ['id','nome','sobrenome','nomeDaMae','genero','nascimento','rg','cpf','logradouro',
'complemento','bairro','cidade','estado','action'];

  constructor(private pacienteService: PacienteService, private _userApi: PacienteReadService) { }

  ngOnInit(): void {
    this.pacienteService.read().subscribe(pacientes => {
      this.pacientes = pacientes
    });
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pacientes, event.previousIndex, event.currentIndex);
    this.pacientes.forEach((user, idx) => {
      user.order = idx + 1;
    });
  }

}
