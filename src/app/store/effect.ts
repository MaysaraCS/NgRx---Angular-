// 
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { DepartmentService } from '../service/department.service';
import { loadDeparment, loadDeparmentSuccess } from "./action";

@Injectable()
export class DepartmentEffects {
    actiions$ = inject(Actions);
    constructor(
        private departmentService: DepartmentService
    ){}
    loadDepartments$ = createEffect(() => 
        this.actiions$.pipe(
            ofType(loadDeparment),
            // mergeMap is used for api call 
            mergeMap(() => 
                this.departmentService.getDept().pipe(
                    map((departments: any) => 
                        loadDeparmentSuccess({ departments })
                    ),
                )
            )
        )
    );
}