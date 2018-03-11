import { Component, OnInit } from '@angular/core';
import { youTubeApiService } from '../watch-later/youtube.service'
@Component({
  selector: 'app-time-of-india',
  templateUrl: './time-of-india.component.html',
  styleUrls: ['./time-of-india.component.scss']
})
export class TimeOfIndiaComponent implements OnInit {
  getToINews: any=[];
  getNewsData: any=[];
  constructor(private toiService: youTubeApiService) {
    this.toiService.getTOINews().subscribe(data=>{
        this.getToINews = data;
        console.log(this.getToINews.articles);
        this.getToINews.articles.map(e =>{
          this.getNewsData.push({title: e.title, image: e.urlToImage})
          console.log(this.getNewsData);
        })
    })
   /* this.getToINews.map(e =>{
      console.log(e.title);
    })*/
   }

  ngOnInit() {
  }

}
