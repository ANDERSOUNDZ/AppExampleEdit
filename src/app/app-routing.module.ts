import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCartComponent } from './home-cart/home-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
