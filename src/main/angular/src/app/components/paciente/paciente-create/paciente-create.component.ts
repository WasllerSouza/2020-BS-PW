import {Paciente} from '../paciente.model';
import {PacienteService} from '../paciente.service';
import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-paciente-create',
  templateUrl: './paciente-create.component.html',
  styleUrls: ['./paciente-create.component.css']
})
export class PacienteCreateComponent implements OnInit, OnChanges {

  paciente: Paciente = {
    firstName: "",
    lastName: "",
    motherName: "",
    genre: "",
    birthDate: "",
    rg: "",
    cpf: "",
    publicPlace: "",
    complement: "",
    district: "",
    city: "",
    state: ""
  }
  d = new Date();
  max: string = this.d.getDay() + "/" + this.d.getMonth() + "/" + this.d.getFullYear();
  pipe = new DatePipe('pt-BR');


  constructor(private PacienteService: PacienteService, private router: Router) {
  }

  ngOnChanges() {

  }

  ngOnInit(): void {
  }

  createPaciente(): void {
    console.log(this.paciente)
    let date;
    if(this.paciente.birthDate !== null && this.paciente.birthDate !== undefined) {
      date = this.pipe.transform(this.paciente.birthDate, 'dd/MM/yyyy');
      this.paciente.birthDate = date;
    }
    console.log(date)
    console.log(this.paciente.birthDate)
    this.PacienteService.create(this.paciente).subscribe(() => {
      this.PacienteService.showMessage('Salvo com Sucesso.');
      this.router.navigate(['/']);
    });
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }

}
