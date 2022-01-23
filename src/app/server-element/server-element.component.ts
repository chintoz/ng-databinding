import {Component, Input, OnInit} from '@angular/core';

// It's possible to use encapsulation attribute to control how it's encapsulated at browser level: None, Emulated or ShadowDom
// encapsulation: ViewEncapsulation.Emulated
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string }

  constructor() {
  }

  ngOnInit(): void {
  }

}
