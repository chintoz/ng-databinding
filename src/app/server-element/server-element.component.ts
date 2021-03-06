import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
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
  @ViewChild('heading', {static: true}) header: ElementRef
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef

  constructor() {
    console.log("constructor called!!")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
    console.log('Text Content: ' + this.header.nativeElement.textContent)
  }

  ngOnInit(): void {
    console.log("ngOnInit called!!")
    console.log('Text Content: ' + this.header.nativeElement.textContent)
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent)
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
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
  }

}
