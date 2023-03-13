import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms'
import { UserService } from '../../../core/services/user/user.service'
import { map, Observable } from 'rxjs'

export class NicknameValidator {
  static createValidator(
    userService: UserService,
    userId?: string,
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return userService
        .verifyUniqueNickname(control.value, userId)
        .pipe(
          map((result) =>
            result.data ? { nicknameAlreadyExist: true } : null,
          ),
        )
    }
  }
}
