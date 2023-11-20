import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
// import { TeamModel} from './../models/team.model';
// import { Player } from '../../models/player.model';
// import { TeamModel } from '../models/team.model';
import { Router } from '@angular/router';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';
import { TeamComponent } from '../team/team.component';
// import { Team } from '../models/team';
import { FormBuilder } from '@angular/forms';
 
@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  // const newTeam: Team = { id: 3, name: 'New Team', maximumBudget: 50000 }
  url = "https://8080-bdbaddeafccbaafacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
 
  constructor(private httpclient : HttpClient) { }
 
 
  getPlayers():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ShowPlayers')
  }
  httpOptions={headers:new HttpHeaders({'content-type':'application/json'})}
  addPlayer(playerdata:Player):Observable<Player>
  {
    return this.httpclient.post<Player>(this.url + '/AddPlayers',playerdata,this.httpOptions)
  }


  getTeams(): Observable<Team[]> {
    return this.httpclient.get<Team[]>(`${this.url}/teams`);
  }

  createTeam(newTeam: Team): Observable<Team> {
    return this.httpclient.post<Team>(`${this.url}/teams`, newTeam);
  }

 
}
 
