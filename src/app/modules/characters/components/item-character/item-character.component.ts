import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { DialogDataDialog } from 'src/app/shared/components/dialog/dialog.component'
import { EGender, EStatus } from '../../../../core/types/characters.type'

@Component({
  selector: 'app-item-character',
  templateUrl: './item-character.component.html',
  styleUrls: ['./item-character.component.scss'],
})
export class ItemCharacterComponent {
  @Input() id: number = 0
  @Input() image: string = ''
  @Input() name: string = ''
  @Input() gender: EGender = EGender.Unknown
  @Input() episodes: string[] = []
  @Input() status: EStatus = EStatus.Unknown
  @Output() sendId = new EventEmitter<number>()

  sendIdCharacter() {
    this.sendId.emit(this.id)
  }
}
