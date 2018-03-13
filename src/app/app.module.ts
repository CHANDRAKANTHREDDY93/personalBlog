import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as _ from 'underscore';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import{ NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
export function TranslateStaticLoadFactory(http: Http){
  return new TranslateStaticLoader(http,'./assets/i18n','.json');
}

import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { HistoryListComponent } from './history/history-list.component';
import { SubscriptionComponent } from './Subscription/subscription.component';
import { LikedComponent } from './liked/liked.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { youTubeApiService } from './watch-later/youtube.service';
import { TrendingComponent } from './trending/trending.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { MusicComponent } from './music/music.component';
import { TimeOfIndiaComponent } from './time-of-india/time-of-india.component';
import { EspnComponent } from './espn/espn.component';
import { NewyorkTimesComponent } from './newyork-times/newyork-times.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6fDFr23ETu0r1ER4Vddy9Nx5rFK-xUW8'
    }),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: TranslateStaticLoadFactory,
      deps: [Http]
    })
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
    HomeComponent,
    HistoryComponent,
    MusicComponent,
    TimeOfIndiaComponent,
    EspnComponent,
    NewyorkTimesComponent
  ],
  providers: [youTubeApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
