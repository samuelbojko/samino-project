import { Component } from '@angular/core';


@Component({
  selector: 'app-quests',
  imports: [Quests],
  templateUrl: './quests.html',
  styleUrl: './quests.css'
})
export class Quests {
  welcomeMessage = "quest works"
}
