import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusListContainerComponent } from './launches-status-list-container/status-list-container.component';
import { StatusListComponent } from './launches-status-list-container/status-list/status-list.component';
import { LaunchesListContainerComponent } from './launches-list-container/launches-list-container.component';
import { LaunchesResultComponent } from './launches-list-container/launches-result/launches-result.component';
import { LaunchesResultCounterComponent } from './launches-list-container/launches-result-counter/launches-result-counter.component';
// tslint:disable-next-line:import-spacing
import { OrderOptionsLaunchResultsComponent }
    from './launches-list-container/order-launches/order-options-launch-results.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule,
    SharedModule
  ],
  declarations: [StatusListComponent, StatusListContainerComponent,
     LaunchesListContainerComponent, LaunchesResultComponent, LaunchesResultCounterComponent, OrderOptionsLaunchResultsComponent]
})
export class StatusModule { }
