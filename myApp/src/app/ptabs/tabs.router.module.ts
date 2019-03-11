import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PtabsPage} from './ptabs.page';
import {AtasksPage} from '../atasks/atasks.page';
import {PtasksPage} from '../ptasks/ptasks.page';
import {CtasksPage} from '../ctasks/ctasks.page';

const routes: Routes = [
  {
    path: 'ptabs',
    component: PtabsPage,
    children: [
      {
        path: '',
        redirectTo: '/ptabs/(alltask:alltask)',
        pathMatch: 'full',
      },
      {
        path: 'alltask',
        outlet: 'alltask',
        component: AtasksPage
      },
      {
        path: 'protask',
        outlet: 'protask',
        component: PtasksPage
      },
      {
        path: 'ctask',
        outlet: 'ctask',
        component: CtasksPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ptabs/(alltask:alltask)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRouterModule { }
