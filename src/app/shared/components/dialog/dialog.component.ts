import { DialogRef } from '@angular/cdk/dialog'
import { Component, EventEmitter, Inject, Output } from '@angular/core'
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog'

export interface DialogData {
  rating: number
  comment: string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogDataDialog {
  commentValue: string = ''
  rating: number = 0

  constructor(
    public dialogRef: DialogRef<{ rating: number; comment: string }>,
    @Inject(DIALOG_DATA) public data: DialogData,
  ) {}

  onSetRating(value: number) {
    this.rating = value
  }

  onAddComment(event: any) {
    this.commentValue = event
  }

  onSendData() {
    this.dialogRef.close({ rating: this.rating, comment: this.commentValue })
  }
}
