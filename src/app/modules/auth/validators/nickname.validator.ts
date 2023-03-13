import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms'
import { UserService } from '../../../core/services/user/user.service'
import { map, Observable } from 'rxjs'

export class NicknameValidator {
  static createValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userService
        .verifyUniqueNickname(control.value)
        .pipe(
          map((result) =>
            result.data ? { nicknameAlreadyExist: true } : null,
          ),
        )
    }
  }
}
