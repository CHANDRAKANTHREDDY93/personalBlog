import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryListComponent } from './history/history-list.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LikedComponent } from './liked/liked.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { youTubeApiService } from './watch-later/youtube.service';
import { TrendingComponent } from './trending/trending.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UserProfileComponent,
    HistoryListComponent,
    SubscriptionComponent,
    LikedComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    WatchLaterComponent,
    TrendingComponent,
  ],
  providers: [youTubeApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
