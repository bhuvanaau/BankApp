import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksComponent } from './banks/banks.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'banks',
    pathMatch: 'full'
  },
  {
    path : 'banks',
    component : BanksComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
