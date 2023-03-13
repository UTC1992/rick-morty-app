import { Component } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'
import { UserService } from '../../../../core/services/user/user.service'
import { UserModel, IUser } from '../../../../core/models/user.model'
import { EStatus } from 'src/app/core/types/generic-response.type'
import { Router } from '@angular/router'
import { UserValidator } from '../../validators/user.validator'
import { NicknameValidator } from '../../validators/nickname.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  title: string
  titleLinkToLogin: string
  registerForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.title = 'Registro'
    this.titleLinkToLogin = 'Ingresar'
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      nickname: [
        '',
        [Validators.required, Validators.minLength(4)],
        [NicknameValidator.createValidator(this.userService)],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
        [UserValidator.createValidator(this.userService)],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  get fullName() {
    return this.registerForm.get('fullName')!
  }

  get nickname() {
    return this.registerForm.get('nickname')!
  }

  get email() {
    return this.registerForm.get('email')!
  }

  get password() {
    return this.registerForm.get('password')!
  }

  onSubmit() {
    const user: IUser = this.registerForm.value
    if (!this.registerForm.invalid) {
      this.userService.saveUser(user).subscribe(
        (response) => {
          if (response.status === EStatus.SUCCESS) {
            this.router.navigate(['/auth/login'])
          }
        },
        (error) => console.log(error),
      )
    }
  }
}
