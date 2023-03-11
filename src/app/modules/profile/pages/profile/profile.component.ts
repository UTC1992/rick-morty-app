import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { UserModel } from '../../../../core/models/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title = 'Perfil'
  userToEdit: UserModel = new UserModel()
  profileForm: FormGroup = new FormGroup({
    nickname: new FormControl(''),
    fullName: new FormControl(''),
  })
}
