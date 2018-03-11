import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { youTubeApiService } from '../watch-later/youtube.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    getData: any =[];
    getVideoId: any=[];
    getLatestMusicData: any=[];
    curUrl: any;
    currentUrl:any;
    subscribeList : any =[];
    subscribeChannelData: any = [];
    channelId : any =[];
    title: string;
    channelPlayList : any = [];
    channelList : any =[];
    newsData: any =[];
    p: any;
    constructor(private latestDataApi: youTubeApiService, private newsApi : youTubeApiService, private sanitizer: DomSanitizer){
      this.latestDataApi.getDefaultData().subscribe(data =>{
        this.getData = data;
        this.getData.items.map(element=>{
          const url ='https://www.youtube.com/embed/';
          this.getVideoId.push(element.contentDetails.bulletin.resourceId.videoId);
          this.getLatestMusicData.push({video : url+element.contentDetails.bulletin.resourceId.videoId, title: element.snippet.title});
        })
      })
      this.newsApi.getSubscriptionList().subscribe( info =>{
          this.subscribeList = info;
          this.subscribeList.items.map( e =>{
            this.subscribeChannelData.push(e.snippet);
            this.subscribeChannelData.map( i =>{
              this.channelId.push(i.resourceId.channelId);
              this.channelId.map(a =>
              {
             this.newsApi.getChannelData(a).subscribe( q=>{
            this.channelPlayList = q;
            })
    })
    });
    });
    });
    }
    getEmbedURL(item){
      this.curUrl = this.sanitizer.bypassSecurityTrustResourceUrl(item);
      return this.curUrl;
    }
    getiFrameURL(data){
      this.currentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data);
      return this.currentUrl;
    }
 ngOnInit() {
  }
}
