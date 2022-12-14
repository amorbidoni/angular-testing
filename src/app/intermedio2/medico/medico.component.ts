import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../../intermedio/espias/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {
  medicos: any[] = [];
  constructor(public medicosService : MedicosService) { }

  ngOnInit(): void {
  }

  saludarMedico(nombre:string){
    return `Hola ${nombre}`;
  }

  getMedicos(){
    this.medicosService.getMedicos().subscribe(res => this.medicos = res)
  }

}
