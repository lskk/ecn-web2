import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TsunamiPotentialPageComponent } from './tsunami-potential-page/tsunami-potential-page.component';

const routes: Routes = [
  {path: 'tsunami-potential', component: TsunamiPotentialPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
