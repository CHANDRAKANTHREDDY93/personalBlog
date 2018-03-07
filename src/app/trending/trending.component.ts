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
  trendingVideoContentData : any =[];
  getVideoId: any = [];
  constructor(private trendingAppService : youTubeApiService, private sanitizer: DomSanitizer) {
    this.trendingAppService.getTrendingVideos().subscribe(items=>
    {
      this.trendingNowData = items;
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
              console.log("Description" +e.snippet.description);
            })

          })
        console.log(this.getVideoId);
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
