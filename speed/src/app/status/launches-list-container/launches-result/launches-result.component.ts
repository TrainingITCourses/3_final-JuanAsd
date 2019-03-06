import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-launches-result',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launches-result.component.html',
  styleUrls: ['./launches-result.component.css']
})
export class LaunchesResultComponent implements OnInit {

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
