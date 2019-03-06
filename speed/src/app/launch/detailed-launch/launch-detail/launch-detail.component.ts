import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-launch-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.css']
})
export class LaunchDetailComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
