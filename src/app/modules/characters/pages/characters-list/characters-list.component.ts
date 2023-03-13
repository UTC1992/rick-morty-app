import { Component } from '@angular/core'
import { CharactersService } from '../../../../core/services/characters/characters.service'
import { ICharacter } from '../../../../core/types/characters.type'

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  characterList: ICharacter[] = []
  characterListSearched: ICharacter[] = []
  breakpoint: number = 1
  searchValue: string = ''
  constructor(private characterService: CharactersService) {}

  ngOnInit() {
    this.onGetCharacters()
    this.breakpoint = window.innerWidth / 380
  }

  handleSize(event: any) {
    this.breakpoint = event.target.innerWidth / 380
  }

  onGetCharacters() {
    this.characterService.getCharacters().subscribe(
      (response) => {
        this.characterList = response.results
        this.characterListSearched = response.results
      },
      (error) => console.log(error),
    )
  }

  onSearching(event: string) {
    const characters = this.characterList.filter((item) =>
      item.name.toLowerCase().includes(event.toLowerCase()),
    )
    this.characterListSearched =
      event.length > 0 ? characters : this.characterList
  }
}
