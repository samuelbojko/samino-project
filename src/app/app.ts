import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quests } from './quests/quests';
import { Questservice } from './questservice';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Quests, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  header = 'Quest Overflow'
  showQuests = false

  ShowQuests() {
    if(this.showQuests) {
      this.showQuests = false
    }
    else {
      this.showQuests = true
    }
  }

  
}
