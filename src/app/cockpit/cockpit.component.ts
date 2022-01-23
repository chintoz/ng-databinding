import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerContent: string = ''
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
