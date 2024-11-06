import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';

import { environment } from '../environments/environment';
import { appReducers } from './app.reducer';
import { EffectsArray } from './todos/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducers),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production, // Enable log-only mode in production
    }),
    provideHttpClient(),
    provideEffects(EffectsArray)
  ],
};
