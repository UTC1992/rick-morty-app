import { Component } from '@angular/core'
import { AuthService } from './core/services/auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showItems: boolean = false
  constructor(private auth: AuthService) {}

  ngDoCheck() {
    this.showItems = this.auth.isLoggedIn()
  }
}
