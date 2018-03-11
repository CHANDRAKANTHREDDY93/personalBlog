import { Component, OnInit, trigger } from '@angular/core';
import { Http, Headers } from '@angular/http';
//import { SafeUrl } from '@angular/platform-browser';
import { youTubeApiService } from './youtube.service';
import { element } from 'protractor';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
//import { DomSanitizer, MediaStorageService } from '@angular/platform-browser';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.scss']
})
export class WatchLaterComponent {
  getCNNnews: any=[];
  setNewsData: any=[];
  constructor(private cnnNewsService : youTubeApiService) {
      this.cnnNewsService.getCNNNews().subscribe(data =>{
        this.getCNNnews = data;
        this.getCNNnews.articles.map(e =>{
          this.setNewsData.push({title: e.title, image: e.urlToImage})
        });
    });
  }  
  }



