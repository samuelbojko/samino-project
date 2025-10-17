import { Routes } from '@angular/router';
import {Home} from './home/home';
import { Quests } from './quests/quests';
import { QuestDetail } from './quest-detail/quest-detail';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'quests',
    component: Quests,
    title: 'quests',
  },

  {
    path: 'quests/:id',
    component: QuestDetail,
    title: 'details',
  },
];