import { Component } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../../../core/services/auth/auth.service'
import { IAuthData } from '../../../../core/types/auth.type'
import { EStatus } from '../../../../core/types/generic-response.type'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title: string
  titleLinkToRegister: string
  loginForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.title = 'Rick and Morty'
    this.titleLinkToRegister = 'Registrarme'
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
    })
  }

  get email() {
    return this.loginForm.get('email')!
  }

  get password() {
    return this.loginForm.get('password')!
  }

  onSubmit() {
    const authData: IAuthData = this.loginForm.value
    if (!this.loginForm.invalid) {
      this.authService.login(authData).subscribe(
        (response) => {
          if (response.status === EStatus.SUCCESS) {
            console.log(response)
            this.authService.setSession(response.data)
          }
        },
        (error) => console.log(error),
      )
    }
  }
}
