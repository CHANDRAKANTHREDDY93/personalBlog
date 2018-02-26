import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems : any =[
    { path: 'dashboard', title: 'Dashboard',  icon: 'glyphicon glyphicon-home', class: '' },
    { path: 'trending', title: 'Trending',  icon: 'glyphicon glyphicon-tint', class: '' },
    { path: 'user-profile', title: 'User Profile',  icon:'glyphicon glyphicon-user', class: '' },
    { path: 'history-list', title: 'History',  icon:'glyphicon glyphicon-repeat', class: '' },
    { path: 'subscription', title: 'Subscriptions',  icon:'glyphicon glyphicon-hdd', class: '' },
    { path: 'watchlater', title: 'Watch Later',  icon:'glyphicon glyphicon-time', class: '' },
    { path: 'liked', title: 'Liked Videos',  icon:'glyphicon glyphicon-thumbs-up', class: '' },
    { path: 'maps', title: 'Maps',  icon:'glyphicon glyphicon-map-marker', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'glyphicon glyphicon-bell', class: '' }
];
  constructor() { }
  ngOnInit() {
  }
}
