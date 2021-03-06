import { Injectable } from '@angular/core';
import { Http, HttpModule} from '@angular/http';
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
    query: string = "music";
    type: string ="video";
    regionCode : string = 'US';
    totalResults : string ='25';
    totalChannelResults : string = '50';
    subscribe: string = 'UCbn1OgGei-DV7aSRo_HaAiw';
    key : string ='AIzaSyBnT5pK9Qh9Vem16D7IQ9VoKE4z-6aihgk';
    trendingApiKey : string ='AIzaSyBLGqg5XhluNwF7umrLjkLsYU0kLpHReQk';
    title: string;
    getData: any=[];
    favList : string ="FLtdTBFhHOlA94eir1d_zWvQ";
    constructor(private http: HttpClient) { 
        
    }

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
        this.q = searchResults;
        return this.http.get("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+this.q);
    }
    getTrendingVideos(){
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode="+this.regionCode+"&maxResults="+this.maxResults+"&key="+this.trendingApiKey);
    }
    getTrendingVideosContent(videoId){
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part="+this.part+"%2CcontentDetails%2Cstatistics&id="+videoId+"&key="+this.trendingApiKey);
    }
    getUserData(){
        return this.http.get("../../assets/api/users.json");
    }
    getLatestNews(){
        return this.http.get("https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCtdTBFhHOlA94eir1d_zWvQ&key="+this.key)
    }
    getDefaultData(){
        return this.http.get("https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC-9-kyTW8ZkZNDHQJ6FgpwQ&maxResults="+this.totalResults+"&key="+this.key);
    }
    getSubscriptionList(){
        return this.http.get("https://www.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCtdTBFhHOlA94eir1d_zWvQ&key="+this.key);
    }
    getChannelData(a){
        return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId="+a+"&maxResults="+this.totalChannelResults+"&key="+this.key);
    }
    getFavoritesList(){
        return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part="+this.part+"%2CcontentDetails&maxResults=25&playlistId="+this.favList+"&key="+this.key);
    }
    getPlayList(channelId){
        return this.http.get("https://www.googleapis.com/youtube/v3/playlists?part="+this.part+"%2CcontentDetails&channelId="+channelId+"&maxResults=50&key="+this.key)
    }
    getSubscriptionVideoList(playListId)
    {
        return this.http.get("https://www.googleapis.com/youtube/v3/playlistItems?part="+this.part+"%2CcontentDetails&maxResults=5&playlistId="+playListId+"&key="+this.key)
    }
    getSubscribeVideos(videoId){
        return this.http.get("https://www.googleapis.com/youtube/v3/videos?part="+this.part+"%2CcontentDetails%2Cstatistics&id="+videoId+"&key="+this.key);
    }
    getCNNNews(){
        return this.http.get("https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=58970b590c7c4c92b151c77f0c7a45c7");
    }
    getTOINews(){
        return this.http.get("https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=58970b590c7c4c92b151c77f0c7a45c7");
    }
    getEspnCric(){
        return this.http.get("https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=58970b590c7c4c92b151c77f0c7a45c7");
    }
    getNYTimes(){
        return this.http.get("https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=58970b590c7c4c92b151c77f0c7a45c7");
    }
    getMaps(){
        return this.http.get("https://maps.googleapis.com/maps/api/streetview?size=600x300&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=AIzaSyB6fDFr23ETu0r1ER4Vddy9Nx5rFK-xUW8");
    }
}
