import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/player.model';
import { AdminService } from '../services/admin.service';
 
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players:[Player];
  newPlayer:Player
  biddingPrice:number=200;
 
  playerdata:any[]=[]
  constructor(private ms:AdminService) {
    this.ms.getPlayers().subscribe(data=>{this.playerdata.push(...data)})
    console.log(this.playerdata)
    
  }
 
  ngOnInit(): void {
  }
 
}
 