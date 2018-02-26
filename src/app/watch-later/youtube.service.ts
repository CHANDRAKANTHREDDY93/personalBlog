import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';

@Injectable()

export class youTubeApiService{
    maxResults: string='10'
    contentDetails : string = 'part=snippet';
    playList : string ='UUX_uPA_dGf7wXjuMEaSKLJA';
    part: string= 'snippet';
    q: string = "Web Design";
    type: string ="video";
    regionCode : string = 'US';
    subscribe: string = 'UCbn1OgGei-DV7aSRo_HaAiw';
    key : string ='AIzaSyBnT5pK9Qh9Vem16D7IQ9VoKE4z-6aihgk';
    trendingApiKey : string ='AIzaSyBLGqg5XhluNwF7umrLjkLsYU0kLpHReQk';
    constructor(private http: HttpClient) { 
    }

    /*getVideo()
     {
        return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+this.playList+ "&key="+this.key);//+this.contentDetails+"/"+this.GoogleUser+"/");
    }   */
    getVideo()
    {
        return this.http.get("https://www.googleapis.com/youtube/v3/search "+this.part+"/"+this.q+"/"+this.key);
    }
    getSearchResults(searchResults)
    {
        this.q = searchResults;
       return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q="+searchResults+"&type="+this.type+"&maxResults="+this.maxResults+"&key="+this.key);
    }
    getSearchSuggestion(searchResults){
        this.q = searchResults;8
        return this.http.get("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+this.q);
    }

    getSubscriptionList(){
        return this.http.get('https://www.youtube.com/channel/'+this.subscribe);
    }

    getTrendingVideos(){
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode="+this.regionCode+"&maxResults="+this.maxResults+"&key="+this.trendingApiKey);
    }
}