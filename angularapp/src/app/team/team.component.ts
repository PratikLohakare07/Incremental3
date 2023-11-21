import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Team } from 'src/models/team.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teams:[Team];
  newTeam:Team
  teamdata:any[]=[]
  constructor(private ms:AdminService,private route:Router) {

    this.ms.getTeams().subscribe(data=>{this.teamdata.push(...data)})
    console.log(this.teamdata)
   }
  ngOnInit(): void {
  }

}
