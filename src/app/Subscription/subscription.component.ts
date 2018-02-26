import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { youTubeApiService }  from '../watch-later/youtube.service';
@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent{
 // subscribeData : any = [];

 /* constructor(private subscribeService: youTubeApiService) { 
    this.subscribeService.getSubscriptionList().subscribe(data =>
    {
      this.subscribeData = data;
      console.log("Subscribe Data" +this.subscribeData);
    })
  }*/
}
