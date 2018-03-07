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
    constructor(private latestDataApi: youTubeApiService, private newsApi : youTubeApiService, private sanitizer: DomSanitizer){
      this.latestDataApi.getDefaultData().subscribe(data =>{
        this.getData = data;
        this.getData.items.map(element=>{
          const url ='https://www.youtube.com/embed/';
          this.getVideoId.push(element.contentDetails.bulletin.resourceId.videoId);
          this.getLatestMusicData.push(url+element.contentDetails.bulletin.resourceId.videoId);
        })
      })
      /*  this.latestDataApi.getName().subscribe(data=>{
          this.title =data;
          console.log("title" +data);
      });*/
      this.newsApi.getSubscriptionList().subscribe( info =>{
          this.subscribeList = info;
          console.log(this.subscribeList);
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
/*      this.latestDataApi.getChannelData().subscribe(channels =>{
        this.channelList = channels;
        console.log(this.channelList);
      })*/
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