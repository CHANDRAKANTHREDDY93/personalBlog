import { Component, OnInit } from '@angular/core';
import { youTubeApiService } from '../watch-later/youtube.service';
@Component({
  selector: 'app-espn',
  templateUrl: './espn.component.html',
  styleUrls: ['./espn.component.scss']
})
export class EspnComponent implements OnInit {

  getEspnCric: any=[];
  constructor(private espnCricService : youTubeApiService) {
      this.espnCricService.getEspnCric().subscribe(data=>{
        this.getEspnCric =data;
        console.log(this.getEspnCric);
      })
   }

  ngOnInit() {
  }

}
