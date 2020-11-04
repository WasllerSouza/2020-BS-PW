import {Injectable, OnInit} from "@angular/core";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";
import {Paciente} from '../paciente.model';
import {PacienteService} from "../paciente.service";


@Injectable()
export class PacienteReadService implements OnInit {
  constructor(private pacienteService: PacienteService) {
  }

  pacientes: Paciente[];

  getUsers(): Observable<Paciente[]> {
    return of(this.pacientes).pipe(delay(400));
  }

  ngOnInit(): void {

  }
}
