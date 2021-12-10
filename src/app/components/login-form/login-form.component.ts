import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  inicioModel: FormGroup ;

  constructor() { this.inicioModel= new FormGroup ({
    user: new FormControl(),
    pass: new FormControl() })}

    iniciarSesion(){
      console.log("Sesion iniciada correctamente");
      alert ("Sesion iniciada correctamente");
    }

  ngOnInit(): void {
  }

}
