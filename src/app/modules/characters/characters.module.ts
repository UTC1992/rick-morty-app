import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CharactersListComponent } from './pages/characters-list/characters-list.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { CharactersRoutingModule } from './characters-routing.module'
import { ItemCharacterComponent } from './components/item-character/item-character.component'
import { FormsModule } from '@angular/forms'
import { DialogModule } from '@angular/cdk/dialog'
import { MyCharacterListComponent } from './pages/my-character-list/my-character-list.component'
import { ItemMyCharacterComponent } from './components/item-my-character/item-my-character.component'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [
    CharactersListComponent,
    ItemCharacterComponent,
    MyCharacterListComponent,
    ItemMyCharacterComponent,
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    DialogModule,
    MatTooltipModule,
  ],
})
export class CharactersModule {}
