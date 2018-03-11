import { Component, OnInit, Input } from '@angular/core';
import { youTubeApiService } from '../../watch-later/youtube.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  search : string;
  searchData: any=[];
  userData:any=[];
  searchItem : string ="Web Development";
  videoTitle : any=[];
  newVideo : any=[];
  constructor(private sanitizer: DomSanitizer) { }
    @Input()
    public searchVideos : any = [];
    textField : string;
    getEmbedURL(data){
      return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }
  }
