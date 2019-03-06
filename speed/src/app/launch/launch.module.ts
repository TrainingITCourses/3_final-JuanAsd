import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchDetailContainerComponent } from './detailed-launch/launch-detail-container.component';
import { LaunchDetailComponent } from './detailed-launch/launch-detail/launch-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LaunchRoutingModule,
    SharedModule
  ],
  declarations: [LaunchDetailContainerComponent, LaunchDetailComponent]
})
export class LaunchModule { }
