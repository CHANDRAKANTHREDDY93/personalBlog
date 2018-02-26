import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { youTubeApiService } from '../watch-later/youtube.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trendingNowData : any =[];
  getLatestTrendingData : any =[];
  constructor(private trendingAppService : youTubeApiService, private sanitizer: DomSanitizer) {
    this.trendingAppService.getTrendingVideos().subscribe(items=>
    {
      this.trendingNowData = items;
      console.log(this.trendingNowData);
      console.log(this.trendingNowData.items);
      this.trendingNowData.items.map(element =>
      {
        //this.getLatestTrendingData.push(element.id);
        const url ='https://www.youtube.com/embed/';
        this.getLatestTrendingData.push(url+element.id);
      })
      console.log(this.getLatestTrendingData);
    })
   }

  ngOnInit() {
  }
  getEmbedURL(data){
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
}

}
