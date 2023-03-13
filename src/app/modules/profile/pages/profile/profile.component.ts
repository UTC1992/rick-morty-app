import { Component } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { DomSanitizer, SafeValue } from '@angular/platform-browser'
import { IUser, UserModel } from '../../../../core/models/user.model'
import { NicknameValidator } from '../../../auth/validators/nickname.validator'
import { UserService } from '../../../../core/services/user/user.service'
import { EStatus } from 'src/app/core/types/generic-response.type'
import { AuthService } from '../../../../core/services/auth/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title: string
  userToEdit: IUser
  profileForm: FormGroup
  urlImage: any

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private auth: AuthService,
  ) {
    this.title = 'Perfil'
    this.userToEdit = new UserModel()
    this.profileForm = this.fb.group({
      nickname: [
        '',
        [Validators.required, Validators.minLength(4)],
        [
          NicknameValidator.createValidator(
            this.userService,
            this.auth.getUserId(),
          ),
        ],
      ],
      fullName: ['', [Validators.required]],
    })
    this.urlImage = ''
  }

  get fullName() {
    return this.profileForm.get('fullName')!
  }

  get nickname() {
    return this.profileForm.get('nickname')!
  }

  ngOnInit() {
    this.onGetUser()
  }

  onGetUser() {
    const userId = this.auth.getUserId()
    this.userService.getUserById(userId).subscribe(
      (response) => {
        if (response.status === EStatus.SUCCESS) {
          this.userToEdit = response.data
          const { fullName, nickname } = this.userToEdit
          this.profileForm.setValue({ fullName, nickname })
          if (response.data.image) {
            this.onGetImage()
          }
        }
      },
      (error) => console.log(error),
    )
  }

  onSubmit() {
    const { nickname, fullName }: IUser = this.profileForm.value
    const dataToUpdate = { nickname, fullName }
    if (!this.profileForm.invalid && this.userToEdit.id) {
      this.userService.updateUser(dataToUpdate, this.userToEdit.id).subscribe(
        (response) => {
          if (response.status === EStatus.SUCCESS) {
            console.log('Updated user')
          }
        },
        (error) => console.log(error),
      )
    }
  }

  onSelectImage(event: any) {
    const file: File = event.target.files[0]

    if (file && this.userToEdit.id) {
      const formData = new FormData()
      formData.append('image', file)
      this.userService
        .uploadImageProfile(this.userToEdit.id, formData)
        .subscribe(
          (response) => {
            if (response.status === EStatus.SUCCESS) {
              this.onGetImage()
            }
          },
          (error) => console.log(error),
        )
    }
  }

  onGetImage() {
    this.userService.getImageProfile(this.auth.getUserId()).subscribe(
      (response) => {
        const objectURL = URL.createObjectURL(response)
        this.urlImage = this.sanitizer.bypassSecurityTrustUrl(objectURL)
      },
      (error) => console.log(error),
    )
  }
}
