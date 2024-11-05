import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';

import { provideStoreDevtools } from '@ngrx/store-devtools';

import { todoReducer } from './todos/todo.reducer';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ todos: todoReducer }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production // Enable log-only mode in production
    })
  ]
};
