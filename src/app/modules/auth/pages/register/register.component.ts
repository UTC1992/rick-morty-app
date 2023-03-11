import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // data form and title
  title = 'Registro'
  titleLinkToLogin = 'Ingresar'
  registerForm: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    nickname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

}
