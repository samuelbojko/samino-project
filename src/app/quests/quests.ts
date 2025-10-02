import { Component } from '@angular/core';
import { Newquests } from '../newquests';


@Component({
  selector: 'app-quests',
  imports: [Quests],
  templateUrl: './quests.html',
  styleUrl: './quests.css'
})
export class Quests {
  welcomeMessage = "quest works"
  newquests: Newquests = {
  id: 1,
  title: 'The Lost Sword',
  desc: 'Find the legendary sword lost in the ancient forest.',
  exp: 50
}

quests: Newquests[] = [
  {
    id: 1,
    title: 'The Lost Sword',
    desc: 'Find the legendary sword lost in the ancient forest.',
    exp: 50
  },
  {
    id: 2,
    title: 'Rescue the Villagers',
    desc: 'Save the villagers trapped in the mountain cave.',
    exp: 70
  },
  {
    id: 3,
    title: 'Defeat the Goblin King',
    desc: 'Challenge and defeat the Goblin King terrorizing the valley.',
    exp: 120
  },
  {
    id: 4,
    title: 'Collect Healing Herbs',
    desc: 'Gather 10 healing herbs from the meadow to aid the healer.',
    exp: 30
  },
  {
    id: 5,
    title: 'Escort the Caravan',
    desc: 'Protect the caravan traveling through the dangerous desert.',
    exp: 90
  },
  

];

removeQuest(id: number) {
    this.quests = this.quests.filter(q => q.id !== id);
 }

addQuest(newQuest: Newquests) {
    this.quests.push({ ...newQuest });
  }
}



