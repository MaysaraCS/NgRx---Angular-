import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadDeparment } from './store/action';
import { selectDepartments, selectLoading } from './store/selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private store = inject(Store);

  deparment$ = this.store.select(selectDepartments);
  loading$ = this.store.select(selectLoading);

  ngOnInit(): void {
      this.store.dispatch(loadDeparment());
  }
}
