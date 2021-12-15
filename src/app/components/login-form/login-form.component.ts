import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { loginService } from 'src/app/loginService.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [loginService]
})
export class LoginFormComponent implements OnInit {

  inicioModel: FormGroup ;

  constructor(private loginService: loginService) { this.inicioModel= new FormGroup ({
    user: new FormControl(),
    pass: new FormControl() })
    
  }

    iniciarSesion(){
      
      this.loginService.resultadoLogin("Sesion iniciada!!!!");
    }

  ngOnInit(): void {
  }

}
