import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatusTitleComponent } from './status-title/status-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StatusTitleComponent
  ],
  exports: [
    StatusTitleComponent
  ]
})
export class SharedModule {}
