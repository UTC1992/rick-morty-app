import { Component, Input } from '@angular/core'
import { AuthService } from '../../../core/services/auth/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() showItems = false

  constructor(private auth: AuthService, private router: Router) {}

  onLogout() {
    this.auth.logout()
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/'])
    }
  }
}
