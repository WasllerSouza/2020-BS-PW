import { Router, ActivatedRoute } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Paciente } from '../paciente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-delete',
  templateUrl: './paciente-delete.component.html',
  styleUrls: ['./paciente-delete.component.css']
})
export class PacienteDeleteComponent implements OnInit {

  paciente: Paciente

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.pacienteService.readById(id).subscribe(paciente =>{
      this.paciente = paciente
    })

  }

  deletePaciente():void{
    this.pacienteService.delete(this.paciente.id).subscribe(() =>{
      this.pacienteService.showMessage('Excluido com sucesso!')
      this.router.navigate(['/'])
    })
  }

  cancel():void{
    this.router.navigate(['/'])
  }

}
