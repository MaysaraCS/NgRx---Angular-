// ng add @ngrx/store@19
// ng add @ngrx/effects@19
// in service 
// ng g s department
// in pages 
// ng g c admin

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { departmentReducer } from './store/reducer';
import { DepartmentEffects } from './store/effect';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideStore({departments: departmentReducer}), 
    provideEffects([DepartmentEffects])]
};
