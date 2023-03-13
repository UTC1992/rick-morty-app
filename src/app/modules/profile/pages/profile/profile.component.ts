import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { DomSanitizer, SafeValue } from '@angular/platform-browser'
import { UserModel } from '../../../../core/models/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title: string
  userToEdit: UserModel
  profileForm: FormGroup
  urlImage: SafeValue

  constructor(private sanitizer: DomSanitizer) {
    this.title = 'Perfil'
    this.userToEdit = new UserModel()
    this.profileForm = new FormGroup({
      nickname: new FormControl(''),
      fullName: new FormControl(''),
    })
    this.urlImage = ''

    fetch('http://localhost:8080/api/upload/640de174268ab55e362e9953')
      .then((res) => res.blob())
      .then((data) => {
        const objectURL = URL.createObjectURL(data)
        this.urlImage = this.sanitizer.bypassSecurityTrustUrl(objectURL)
      })
  }
}
