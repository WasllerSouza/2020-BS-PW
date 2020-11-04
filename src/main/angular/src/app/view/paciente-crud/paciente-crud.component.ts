import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HeaderService} from "../../components/template/header/header.service";


@Component({
  selector: 'app-paciente-crud',
  templateUrl: './paciente-crud.component.html',
  styleUrls: ['./paciente-crud.component.css']
})
export class PacienteCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
  headerService.headerData = {
    title: 'Cadastrar paciente',
    icon: ' medical_services',
    routeUrl: ''
  }}

  ngOnInit(): void {
  }

  navigatePacienteCreate(): void{
    this.router.navigate(['/paciente/create'])
  }

}
