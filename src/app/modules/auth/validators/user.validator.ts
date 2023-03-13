import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms'
import { UserService } from '../../../core/services/user/user.service'
import { map, Observable } from 'rxjs'

export class UserValidator {
  static createValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userService
        .verifyUniqueEmail(control.value)
        .pipe(
          map((result) => (result.data ? { userAlreadyExist: true } : null)),
        )
    }
  }
}
