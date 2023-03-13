import { Component, Input } from '@angular/core'
import { EGender, EStatus } from '../../../../core/types/characters.type'

@Component({
  selector: 'app-item-character',
  templateUrl: './item-character.component.html',
  styleUrls: ['./item-character.component.scss'],
})
export class ItemCharacterComponent {
  @Input() image: string = ''
  @Input() name: string = ''
  @Input() gender: EGender = EGender.Unknown
  @Input() episodes: string[] = []
  @Input() status: EStatus = EStatus.Unknown
}
