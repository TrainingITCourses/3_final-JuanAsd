import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-status-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
