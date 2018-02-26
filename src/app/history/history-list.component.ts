import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent{
  public latitude: number;
  public longitude: number;
  private watchId: number;

  public constructor(private zone: NgZone) {
    }

   
}
