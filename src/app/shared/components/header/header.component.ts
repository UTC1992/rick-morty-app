import { Component } from '@angular/core'
import { AuthService } from '../../../core/services/auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showItems: boolean = this.auth.isLoggedIn()
  constructor(private auth: AuthService) {}
}
