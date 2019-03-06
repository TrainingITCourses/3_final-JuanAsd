import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-order-options-launch-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './order-options-launch-results.component.html',
  styleUrls: ['./order-options-launch-results.component.css']
})
export class OrderOptionsLaunchResultsComponent implements OnInit {

  @Output() cambiarOrden: EventEmitter<number>;

  constructor() {
    this.cambiarOrden = new EventEmitter();
  }

  ngOnInit() {
  }

  public onClick(orden: number) {
    this.cambiarOrden.emit(orden);
  }
}
