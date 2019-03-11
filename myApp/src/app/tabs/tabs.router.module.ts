import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { DescriptionPage } from '../description/description.page';
import { SubTaskPage } from '../sub-task/sub-task.page';
import { TimesheetPage } from '../timesheet/timesheet.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(description:description)',
        pathMatch: 'full',
      },
      {
        path: 'description',
        outlet: 'description',
        component: DescriptionPage
      },
      {
        path: 'subtask',
        outlet: 'subtask',
        component: SubTaskPage
      },
      {
        path: 'timesheet',
        outlet: 'timesheet',
        component: TimesheetPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(description:description)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
