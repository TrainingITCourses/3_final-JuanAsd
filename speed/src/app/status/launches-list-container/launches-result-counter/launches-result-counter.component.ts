import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-launches-result-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launches-result-counter.component.html',
  styleUrls: ['./launches-result-counter.component.css']
})
export class LaunchesResultCounterComponent implements OnInit {

  @Input() public count: number;

  constructor() { }

  ngOnInit() {
  }

}
