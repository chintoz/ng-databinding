import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = []
  games = []
  displayGameAssignment: boolean = true

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  onGameAdded(gameData: { value: number }) {
    this.games.push(gameData)
  }

  onGameCleaned() {
    this.games = []
  }

  onChangeFirst(): void {
    this.serverElements[0].name = 'Changed'
  }

  onDestroyFirst(): void {
    this.serverElements.splice(0, 1)
  }

}
