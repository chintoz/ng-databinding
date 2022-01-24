import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

// It's possible to use encapsulation attribute to control how it's encapsulated at browser level: None, Emulated or ShadowDom
// encapsulation: ViewEncapsulation.Emulated
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string }
  @Input() name: string

  constructor() {
    console.log("constructor called!!")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
  }

  ngOnInit(): void {
    console.log("ngOnInit called!!")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
    console.log(changes)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
  }

}
