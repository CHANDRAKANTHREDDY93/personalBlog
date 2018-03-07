import { Component, OnInit, Input } from '@angular/core';
import { youTubeApiService } from '../../watch-later/youtube.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems : any =[
    { path: 'subscription', title: 'Subscriptions',  icon:'glyphicon glyphicon-hdd' },
    { path: 'watchlater', title: 'Watch Later',  icon:'glyphicon glyphicon-time'},
    { path: 'liked', title: 'Liked Videos',  icon:'glyphicon glyphicon-thumbs-up' },
    { path: 'favorites', title: 'Favorites',  icon:'glyphicon glyphicon-bell'}
];
  youTubeUser : any=[
    { path: 'home', title: 'Home',  subLi: [], icon: 'glyphicon glyphicon-home'},
    { path: 'trending', title: 'Trending', subLi: [], icon: 'glyphicon glyphicon-tint'},
    { path: 'history', title: 'History', subLi: [], icon:'glyphicon glyphicon-repeat'}
  ];

  title : string;
  newTitle: any=[];;
  favData : any=[]
  constructor(private titleService : youTubeApiService){
      this.titleService.getLatestNews().subscribe(data =>{
          this.newTitle = data;
          console.log(this.newTitle);
          this.newTitle.items.map(element =>{
            this.title = element.snippet.title;
          })
      })
      this.titleService.getFavoritesList().subscribe(list=>{
         this.favData =list;
      })
   }
  ngOnInit() {
    this.title = sessionStorage.getItem("username");
  }
}
