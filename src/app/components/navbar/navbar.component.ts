import { Component, OnInit, ElementRef, Compiler, OnChanges  } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { youTubeApiService } from '../../watch-later/youtube.service';
import { DashboardComponent } from '../../dashboard/dashboard.component';
@Component({
    
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    searchData : any =[];
    videoTitle: any =[];
    itemList : any=[];
    search : string;
    public newVideo: any = [];
    ids: any;
    text : string = "falkv";
    searchItem : string ="Web Development";
    constructor(private compiler: Compiler, private element: ElementRef, private appService : youTubeApiService) {
        this.compiler.clearCache();
        this.appService.getSearchResults(this.searchItem).subscribe(data =>
        {
            this.searchData = data;
            console.log(this.searchData);
        });
        }
        searchResults(searchItem:string)
        {
            console.log(this.searchData);
             this.newVideo = [];
            this.videoTitle=[];
            var res = this.appService.getSearchResults(searchItem).subscribe(data =>
            {
                this.searchData = data;
                console.log(this.searchData)
                this.videoTitle = this.searchData.items.map(obj=>obj.id.videoId)
                const url ='https://www.youtube.com/embed/';
                for (let index = 0; index < this.videoTitle.length; index++) {
                this.newVideo.push(url+this.videoTitle[index]);   
            }
            });
        }
        onSearchChange(search) {  
        this.newVideo = [];
        }
    ngOnInit(){
    }
    getTitle(){
      return 'Dashboard';
    }
}
