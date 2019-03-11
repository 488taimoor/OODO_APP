import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { DescriptionPageModule } from '../description/description.module';
import { SubTaskPageModule } from '../sub-task/sub-task.module';
import { TimesheetPageModule } from '../timesheet/timesheet.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    TimesheetPageModule,
    SubTaskPageModule,
    DescriptionPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
