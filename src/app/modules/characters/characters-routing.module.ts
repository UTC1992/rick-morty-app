import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CharactersListComponent } from './pages/characters-list/characters-list.component'
import { MyCharacterListComponent } from './pages/my-character-list/my-character-list.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character-list',
    pathMatch: 'full',
  },
  {
    path: 'character-list',
    component: CharactersListComponent,
  },
  {
    path: 'my-character-list',
    component: MyCharacterListComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
