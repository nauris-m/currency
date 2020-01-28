import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kido',
  templateUrl: './kido.component.html',
  styleUrls: ['./kido.component.less']
})
export class KidoComponent implements OnInit {

  public timeStamp: Date;

  ngOnInit() {
    this.updateTimeStamp();
  }

  updateTimeStamp() {
    this.timeStamp = new Date();
  }
}
