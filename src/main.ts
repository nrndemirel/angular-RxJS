import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App implements OnInit {
  name = 'Angular';

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([30, 20, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.log(`resulting item .. ${err}`),
      complete: () => console.log(`complete`),
    });

    from(['Apple1', 'apple2', 'Apple3']).subscribe({
      next: (apple) => console.log(`Apple emitted ${apple}`),
      error: (err) => console.log(`Error accured: ${err}`),
      complete: () => console.log(`No more apples, go home..`),
    });
  }
}

bootstrapApplication(App);
