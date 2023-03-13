import { Component } from '@angular/core'
import { ICharacter } from '../../../../core/types/characters.type'
import { CharactersService } from '../../../../core/services/characters/characters.service'
import { IRatingCharacter } from '../../../../core/types/rating-character.type'

@Component({
  selector: 'app-my-character-list',
  templateUrl: './my-character-list.component.html',
  styleUrls: ['./my-character-list.component.scss'],
})
export class MyCharacterListComponent {
  characterList: IRatingCharacter[] = []
  characterListSearched: IRatingCharacter[] = []
  breakpoint: number = 1
  searchValue: string = ''
  rating: number = 0
  comment: string = ''
  characterToAdd: ICharacter = {}

  constructor(private characterService: CharactersService) {}

  ngOnInit() {
    this.onGetCharacters()
    this.breakpoint = window.innerWidth / 380
  }

  handleSize(event: any) {
    this.breakpoint = event.target.innerWidth / 380
  }

  onGetCharacters() {
    this.characterService.getMyCharacterList().subscribe(
      (response) => {
        this.characterList = response.data
        this.characterListSearched = response.data
      },
      (error) => console.log(error),
    )
  }

  onSearching(event: string) {
    const characters = this.characterList.filter((item) =>
      item.name?.toLowerCase().includes(event.toLowerCase()),
    )
    this.characterListSearched =
      event.length > 0 ? characters : this.characterList
  }
}
