import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
export class Quests implements OnInit, OnDestroy {
  
  private questsService = inject(Questservice);

  welcomeMessage = "quest works"
  quests = this.questsService.getQuests();


  removeQuest(id: number) {
    this.questsService.removeQuest(id);
    // this.quests = this.questsService.getQuests();
  }

  addQuest() {
    const newQuest: Newquests = {
      id: this.quests.length + 1,// treba upravit
      title: 'idk',
      desc: "idk2",
      exp: 150
    }

    // this.quests = [...this.quests, newQuest];
    // this.quests.push(newQuest)
    // this.questsService.addQuest(newQuest);
    // this.quests = this.questsService.getQuests();
  }

ngOnDestroy(): void {
    console.log('Quests component destroyed')
  }

  ngOnInit() {
    console.log('Quests component initialized')
  }
  

  
}



