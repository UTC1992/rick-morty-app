import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CharactersListComponent } from './pages/characters-list/characters-list.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { CharactersRoutingModule } from './characters-routing.module'

@NgModule({
  declarations: [CharactersListComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class CharactersModule {}
