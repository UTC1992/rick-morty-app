import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-item-my-character',
  templateUrl: './item-my-character.component.html',
  styleUrls: ['./item-my-character.component.scss'],
})
export class ItemMyCharacterComponent {
  stars: number[] = [1, 2, 3, 4, 5]

  @Input() image: string = ''
  @Input() name: string = ''
  @Input() rating: number = 0
  @Input() comment: string = ''
}
