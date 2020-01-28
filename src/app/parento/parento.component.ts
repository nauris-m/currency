import { Component, OnInit, ViewChild } from '@angular/core';
import { KidoComponent } from '../kido/kido.component';

@Component({
  selector: 'app-parento',
  templateUrl: './parento.component.html',
  styleUrls: ['./parento.component.less']
})
export class ParentoComponent implements OnInit {

  @ViewChild(KidoComponent, {static: true}) childComponent: KidoComponent;

  ngOnInit(): void {
  }

  update() {
    console.log('update child component');
    this.childComponent.updateTimeStamp();
  }
}
