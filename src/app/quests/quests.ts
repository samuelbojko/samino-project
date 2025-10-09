import { Component } from '@angular/core';
import { Newquests } from '../newquests';
import { Questservice } from '../questservice';

@Component({
  selector: 'app-quests',
  standalone: true,
  imports: [Quests],
  providers: [Questservice],
  templateUrl: './quests.html',
  styleUrl: './quests.css'
})
export class Quests {
  welcomeMessage = "quest works"
  quests: Newquests[] = [];

  constructor(private questsService: Questservice) {
    this.quests = this.questsService.getQuests();
  }

  removeQuest(id: number) {
    this.questsService.removeQuest(id);
    this.quests = this.questsService.getQuests();
  }

  addQuest(newQuest: Newquests) {
    this.questsService.addQuest(newQuest);
    this.quests = this.questsService.getQuests();
  }
}



