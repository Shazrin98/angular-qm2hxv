import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app/app.module';
import { Component } from '@angular/core';

platformBrowserDynamic().destroy();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  @Component({
    selector: 'app-root',
    template: `
      <h1>Hello from {{ name }}!</h1>
      <a target="_blank" href="https://angular.io/start">
        Learn more about Angular
      </a>
    `,
  })
  export class App {
    name = 'Angular';
  }