import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { youTubeApiService }  from '../watch-later/youtube.service';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent{
  subscribeList: any=[];
  p:any;
  subscribeChannels : any =[];
  subscribeChannelTitles: any = [];
  subscribechannelLogo:any=[];
  subscribeChannelId: any =[];
  playListItems : any=[];
  playListId : any=[];
  getVideoList :any;
  getVideoId: any=[];
  getVideos: any=[];
 constructor(private subscriptionService: youTubeApiService, private sanitizer: DomSanitizer){
  this.subscriptionService.getSubscriptionList().subscribe( info =>{
    this.subscribeList =info;
    console.log(typeof(info))
    this.subscribeList.items.map(ele =>{

      this.subscribeChannels.push(ele.snippet.resourceId.channelId);
      this.subscribeChannelTitles.push(ele.snippet.title);
      this.subscribeChannelId.push(ele.snippet.resourceId.channelId);
      this.subscriptionService.getPlayList(ele.snippet.resourceId.channelId).subscribe(data =>{
          this.playListItems = data;
          console.log(this.playListItems);
          this.playListItems.items.map(item =>{
            this.playListId.push(item.id);
      this.subscriptionService.getSubscriptionVideoList(item.id).subscribe(list =>{
          this.getVideoList= list;
        this.getVideoList.items.map( q=>{
          const url ='https://www.youtube.com/embed/';
          this.getVideos.push({video: url+q.snippet.resourceId.videoId, title: q.snippet.title});
          })
          })
      })
          })
      })
 });
}
 getEmbedURL(item){
  return this.sanitizer.bypassSecurityTrustResourceUrl(item);
}
getiFrameURL(data){
  return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  
}
 }
