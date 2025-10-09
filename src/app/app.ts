import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quests } from './quests/quests';
import { Questservice } from './questservice';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Quests],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  header = 'Quest Overflow'
}
