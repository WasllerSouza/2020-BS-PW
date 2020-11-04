import { Paciente } from '../paciente.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteService } from '../paciente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {

  paciente: Paciente

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pacienteService.readById(id).subscribe(paciente => {
      this.paciente = paciente
    });
  }

  updatePaciente(): void {
    console.log(this.paciente)
    this.pacienteService.update(this.paciente).subscribe(() => {
      this.pacienteService.showMessage("Paciente atualizado com Sucesso!")
      this.router.navigate(['/'])
    })
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
