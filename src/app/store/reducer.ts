// what type of data u r going to store

import { loadDeparment, loadDeparmentSuccess } from "./action";
import { Department } from "./model";
import { createReducer, on } from "@ngrx/store";

export interface DepartmentState{
    departments: Department[];
    loading: boolean;
}

// pass the initial state
export const initialState :  DepartmentState = {
    departments:[],
    loading: false
}

// create reducer function

export const departmentReducer = createReducer(
    initialState,
    on( loadDeparment,state => ({
        ...state,
        loading: true
    })),
    on(loadDeparmentSuccess, (state, {departments}) => ({
        ...state,
        departments: departments,
        loading: false
    }))
) 