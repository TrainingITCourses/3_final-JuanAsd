import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchDetailContainerComponent } from './detailed-launch/launch-detail-container.component';

const routes: Routes = [
  {
    path: ':id', component: LaunchDetailContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchRoutingModule { }
