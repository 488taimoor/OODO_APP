import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import{TabsRouterModule} from './tabs.router.module'

import { PtabsPage } from './ptabs.page';
import {AtasksPageModule} from '../atasks/atasks.module';
import {PtasksPageModule} from '../ptasks/ptasks.module';
import {CtasksPageModule} from '../ctasks/ctasks.module';

// const routes: Routes = [
//   {
//     path: '',
//     component: PtabsPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsRouterModule,
    CtasksPageModule,
    PtasksPageModule,
    AtasksPageModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [PtabsPage]
})
export class PtabsPageModule {}
