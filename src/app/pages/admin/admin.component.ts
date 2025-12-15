import { Component, inject } from '@angular/core';
import { selectDepartments } from '../../store/selector';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-admin',
  imports: [AsyncPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
    private store = inject(Store);

    deparment$ = this.store.select(selectDepartments);
  

}
