import { Component, OnInit } from '@angular/core';
import { youTubeApiService } from '../watch-later/youtube.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  latitude =51.678418;
  longitude =7.809007;
  locationChosen = false;
  getMapsData;

  constructor(private getMapService: youTubeApiService) {
    this.getMapService.getMaps().subscribe(data=>{
        this.getMapsData = data;
        console.log("Data" +this.getMapsData);
    })
   }

  ngOnInit() {
}
  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
}
