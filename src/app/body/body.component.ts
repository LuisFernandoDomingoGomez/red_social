import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrarMensaje = true;

  constructor() { }
  
  ngOnInit() {
    console.log("En este instante el componente ha cargado")
  }

  materias: string[] = [
    'Gestion del proceso de desarrollo de software',
    'Aplicaciones web progresivas',
    'Integradora',
    'Desarrollo movil integral',
    'Optativa 1: Creacion de Video Juegos',
    'Negociacion empresarial',
    'Ingles IX'
  ];

  contador = 1;

}
