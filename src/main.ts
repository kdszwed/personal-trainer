import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';

bootstrapApplication(App, {
  providers: [
    provideClientHydration(),
    provideRouter(routes)
  ]
});
