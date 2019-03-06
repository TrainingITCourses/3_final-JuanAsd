import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusListContainerComponent } from './launches-status-list-container/status-list-container.component';
import { LaunchesListContainerComponent } from './launches-list-container/launches-list-container.component';

const routes: Routes = [
  {
    path: '', component: StatusListContainerComponent,
  },
  {
    path: ':id/launches',
    component: LaunchesListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
