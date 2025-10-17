import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Questservice } from '../questservice';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quest-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quest-detail.html',
  styleUrls: ['./quest-detail.css']
})
export class QuestDetail {
  quest?: any;

  constructor(private route: ActivatedRoute, private questService: Questservice) {
    const id = Number(this.route.snapshot.params['id']);
    this.quest = this.questService.getQuests()().find(q => q.id === id);
  }
}
