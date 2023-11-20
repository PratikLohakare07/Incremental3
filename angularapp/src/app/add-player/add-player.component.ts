import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { Player } from '../../models/player.model';
 
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerdata: Player= {id:0,name:'',age:0,category:'',biddingPrice:0}
  // moviedata: IMovie = { id: 0, name: '',  yearrelease: 0 ,rating: 0}
 
  constructor(private ms:AdminService,private route:Router) { }
 
  saveData(player:Player):void{
    this.playerdata=player
    this.ms.addPlayer(this.playerdata).subscribe(
      ()=>{
      alert("Player Added")
      this.route.navigate(['/ShowPlayers'])
      }
    )
    }
 
  ngOnInit(): void {
  }
}