import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-status-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './status-title.component.html',
  styleUrls: ['./status-title.component.css']
})
export class StatusTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
