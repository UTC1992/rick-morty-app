import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
