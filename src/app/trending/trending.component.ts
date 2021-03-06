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
  getVideoTitle: any = [];
  newData : any = [];
  title: string="Trending Component";
  trendingVideoContentData : any =[];
  getVideoId: any = [];
  p:any;
  constructor(private trendingAppService : youTubeApiService, private sanitizer: DomSanitizer) {
    this.trendingAppService.getTrendingVideos().subscribe(items=>
    {
      this.trendingNowData = items;
      console.log(this.trendingNowData);
      this.trendingNowData.items.map(element =>
      {
        const url ='https://www.youtube.com/embed/';
        this.getVideoId.push(element.id);
        this.trendingAppService.getTrendingVideosContent(element.id).subscribe(lists=>
          {
            this.trendingVideoContentData = lists;
            this.trendingVideoContentData.items.map(e =>
            {
              this.getVideoTitle.push(e.snippet.title);
            })
          })
        this.getLatestTrendingData.push(url+element.id);
      })
    })
   }

  ngOnInit() {
  }
  getEmbedURL(data){
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
}
}
