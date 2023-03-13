import { Component } from '@angular/core'
import { CharactersService } from '../../../../core/services/characters/characters.service'
import { ICharacter } from '../../../../core/types/characters.type'
import { DialogDataDialog } from '../../../../shared/components/dialog/dialog.component'
import { Dialog } from '@angular/cdk/dialog'
import { IRatingCharacter } from '../../../../core/types/rating-character.type'

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
  rating: number = 0
  comment: string = ''
  characterToAdd: ICharacter = {}

  constructor(
    private characterService: CharactersService,
    public dialog: Dialog,
  ) {}

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
      item.name?.toLowerCase().includes(event.toLowerCase()),
    )
    this.characterListSearched =
      event.length > 0 ? characters : this.characterList
  }

  onFindCharacter(id: number) {
    const character = this.characterList.find((item) => item.id === id)
    if (character) {
      this.characterToAdd = character
    }
  }

  openDialog(id: number) {
    this.onFindCharacter(id)
    const dialogRef = this.dialog.open<{ rating: number; comment: string }>(
      DialogDataDialog,
      {
        data: {
          rating: this.rating,
          comment: this.comment,
        },
      },
    )

    dialogRef.closed.subscribe((result) => {
      this.rating = result?.rating || 0
      this.comment = result?.comment || ''
      this.onAddRating()
    })
  }

  onAddRating() {
    const ratingCharacter: IRatingCharacter = {
      rating: this.rating,
      comment: this.comment,
      name: this.characterToAdd.name || '',
      image: this.characterToAdd.image || '',
    }

    this.characterService.saveCharacter(ratingCharacter).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => console.log(error),
    )
  }
}
