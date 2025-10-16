import { Routes } from '@angular/router';
import {Home} from './home/home';
import { Quests } from './quests/quests';


export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'quests/:id',
    component: Quests,
    title: 'quests',
  },
];