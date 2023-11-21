import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from '../player/player.component';
import { AddPlayerComponent } from '../add-player/add-player.component';
import { TeamComponent } from '../team/team.component';

const routes: Routes = [
  {path:'show',component:PlayerComponent},
  {path:'add',component:AddPlayerComponent},
  {path:'team',component:TeamComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
