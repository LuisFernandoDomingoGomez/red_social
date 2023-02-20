import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  generos: string[] = ['Masculino', 'Femenino'];
  formNuevoUsuario !: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  guardar() {
    console.log('Guardar');
    console.log(this.formNuevoUsuario);
  }

  ngOnInit(): void {

    this.formNuevoUsuario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      genero:[''],
      correo:['', [Validators.required, Validators.email]],

        calle: ['', Validators.required],
        ciudad: ['', Validators.required],
        estado: ['', Validators.required],
        codigoPostal: ['']
    });

  }

  getFormato(componente:string) {
    let formato:string = 'form-control';

    if (this.formNuevoUsuario.get(componente)?.invalid && this.formNuevoUsuario.get(componente)?.touched) {
      formato = 'form-control is-invalid';
    } else if(this.formNuevoUsuario.get(componente)?.valid && this.formNuevoUsuario.get(componente)?.touched) {
      formato = 'form.control is-valid';
    }
    return formato;
  }

  getErrorMessage(componente:string) {
    let message: string = '';
    let length: string = '';

    if (this.formNuevoUsuario.get(componente)?.hasError('minlength')) {
      message = 'Este campo es requerido';
    } else if (this.formNuevoUsuario.get(componente)?.hasError('minlength')) {

      length = this.formNuevoUsuario.get(componente)?.errors?.['minlength']?.['requiresLength'];
      message = 'La longitud minima de este campo es de ${ length } caracteres.';
    } else if (this.formNuevoUsuario.get(componente)?.hasError('email')) {

      message = 'Correo con formato incorrecto';
    }
    return message;
  }

}
