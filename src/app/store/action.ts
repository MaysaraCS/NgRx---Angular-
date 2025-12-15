// what type of operation u r goint to use in ur store 
import { createAction, props } from "@ngrx/store";
import { Department } from "./model";

export const loadDeparment = createAction('[Department] Load Departments');

// here we use props because while dispatching the action we should be passing the data 
export const loadDeparmentSuccess = createAction(
    '[Department] Load Departments Success',
    props<{ departments: Department[] }>()
); 

