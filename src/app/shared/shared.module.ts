import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'
import { HeaderComponent } from './components/header/header.component'
import { RouterModule } from '@angular/router'
import { DialogDataDialog } from './components/dialog/dialog.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [HeaderComponent, DialogDataDialog],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
  ],
  exports: [HeaderComponent],
})
export class SharedModule {}
