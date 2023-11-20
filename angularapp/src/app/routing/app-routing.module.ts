import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from '../player/player.component';
import { AddPlayerComponent } from '../add-player/add-player.component';

const routes: Routes = [
  {path:'show',component:PlayerComponent},
  {path:'add',component:AddPlayerComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
