import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  formulario: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nombres: [, Validators.compose([Validators.required])],
      edad: [, Validators.compose([Validators.required])],
      sexo: [, Validators.compose([Validators.required])],
      comentario: ['', Validators.compose([])],
    });
  }

  aceptar() {
    console.log(this.formulario);

    if (this.formulario.valid) {
      alert('Okk');
    }
  }
}
