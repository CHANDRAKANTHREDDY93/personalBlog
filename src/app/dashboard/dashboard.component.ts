import { Component, OnInit, Input} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private sanitizer: DomSanitizer) { }
  @Input()
  public searchVideos : any = [];
  textField : string;
  getEmbedURL(data){
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
}
}
