import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TrendingComponent } from './trending/trending.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryListComponent } from './history/history-list.component';
import { SubscriptionComponent } from './Subscription/subscription.component';
import { LikedComponent } from './liked/liked.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { MusicComponent } from './music/music.component';
import { SearchComponent } from './components/search/search.component';
import { TimeOfIndiaComponent} from './time-of-india/time-of-india.component';
import { EspnComponent} from './espn/espn.component';
import { NewyorkTimesComponent } from './newyork-times/newyork-times.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'home',           component: HomeComponent },
    { path: 'history',        component: HistoryComponent },
    { path : 'best of youtube', component: MusicComponent},
    //{ path: 'best of youtube',          component: MusicComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'trending',       component: TrendingComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'history-list',   component: HistoryListComponent },
    { path: 'subscription',   component: SubscriptionComponent },
    { path: 'liked',          component: LikedComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'cnn',     component: WatchLaterComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {path: 'search',          component: SearchComponent},
    {path: 'timesOfIndia',    component: TimeOfIndiaComponent},
    {path: 'espnCric',        component: EspnComponent},
    {path: 'newyorkTimes',    component: NewyorkTimesComponent},
    { path: '**',               redirectTo: 'home' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
