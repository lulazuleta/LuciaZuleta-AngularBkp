import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
 

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  personaModel: FormGroup ;

  constructor() {
    this.personaModel= new FormGroup ({
      user: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      mail: new FormControl(),
      pass: new FormControl() })
   }

   guardar(){
     console.log("Se guardaron los datos correctamente " + this.personaModel.value.user + " "+ this.personaModel.value.nombre+ " "+ this.personaModel.value.apellido + " "+ this.personaModel.value.mail);
   };

  ngOnInit(): void {
    console.log("Se inicio correctamente el formulario de registro")

  }

}
