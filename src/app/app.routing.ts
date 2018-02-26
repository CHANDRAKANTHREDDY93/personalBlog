import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TrendingComponent } from './trending/trending.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryListComponent } from './history/history-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LikedComponent } from './liked/liked.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'trending',       component: TrendingComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'history-list',   component: HistoryListComponent },
    { path: 'subscription',   component: SubscriptionComponent },
    { path: 'liked',          component: LikedComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'watchlater',     component: WatchLaterComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: '**',               redirectTo: 'dashboard' }
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
