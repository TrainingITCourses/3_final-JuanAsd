import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-status-list-container',
  templateUrl: './status-list-container.component.html',
  styleUrls: ['./status-list-container.component.css']
})
export class StatusListContainerComponent implements OnInit {

  public statusList$: Observable<any[]>;
  public launchesList$: Observable<any[]>;

  constructor(private global: Store<GlobalState>) { }

  ngOnInit() {
    this.statusList$ = this.global.select(x => x.status).pipe(map(x => x.statuses));
    this.launchesList$ = this.global.select(x => x.launch).pipe(map(x => x.launches));
  }

}
