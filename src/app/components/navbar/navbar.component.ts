import { Component, OnInit, ElementRef, Compiler, OnChanges  } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { CookieService } from 'angular2-cookie/services/cookies.service';

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
    user:any = [];
    public userName : string;
    isValid : boolean=false;
    userData: any =[];
    storeData : any =[];
    userInfo: any =[];
    userImg: any=[];
    img: string;

    searchItem : string ="Web Development";
    constructor(private compiler: Compiler, private element: ElementRef, private appService : youTubeApiService, private cookieService : CookieService) {
        this.compiler.clearCache();
        this.appService.getLatestNews().subscribe(list =>{
            this.userInfo = list;
            this.userInfo.items.map(el =>{
                this.img =el.snippet.thumbnails.default.url;
            })  
        })
        this.appService.getSearchResults(this.searchItem).subscribe(data =>
        {
            this.searchData = data;
        });
        this.appService.getUserData().subscribe(userInfo =>
        {
            this.userData = userInfo;
        });
        }
        validate(user){
            this.userData.map(element =>
            {
                if(element.email==user.email && element.password == user.password)
                {
                    this.userName = element.name;
                    this.isValid = true;
                    sessionStorage.setItem("username", element.name);
                    window.location.reload();
                }
            })
                if(!this.isValid){
                    console.log("Login failed");
                }
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
    saveData(storeData)
    {
        console.log(storeData);
        this.cookieService.put(storeData, "Data");
     alert(this.cookieService.get(storeData.name));
    }
    
}
