import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title: string = 'Rick and Morty'
  titleLinkToRegister: string = 'Registrarme'
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

}
