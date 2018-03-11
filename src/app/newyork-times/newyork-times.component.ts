import { Component, OnInit } from '@angular/core';
import { youTubeApiService } from '../watch-later/youtube.service';

@Component({
  selector: 'app-newyork-times',
  templateUrl: './newyork-times.component.html',
  styleUrls: ['./newyork-times.component.scss']
})
export class NewyorkTimesComponent{
  getNYTimes: any=[];
  getAllnewsData: any=[];
  constructor(private newyorkTimesService : youTubeApiService) {
    this.newyorkTimesService.getNYTimes().subscribe(data =>{
        this.getNYTimes = data;
        this.getNYTimes.articles.map(e =>{
          this.getAllnewsData.push({title: e.title, image: e.urlToImage})
          console.log(this.getAllnewsData);
        })
    })
   }


}
