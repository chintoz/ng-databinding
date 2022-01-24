import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  started: boolean = false
  @Output() gameCreated = new EventEmitter<{ value: number }>()
  @Output() gameCleaned = new EventEmitter<{}>()
  interval: any

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.started = true
    this.interval = setInterval(() => {
      console.log("Interval")
      this.gameCreated.emit({value: Math.floor(Math.random() * 1000000)})
    }, 1000)
  }

  onStopGame(): void {
    this.started = false
    clearInterval(this.interval)
  }

  onGameClean(): void {
    this.gameCleaned.emit({})
  }

}
