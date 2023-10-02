import { Component } from '@angular/core';


// @Component({
//   selector: 'app-root',
//   templateUrl: '<h1>Hello world</h1>',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'app-root',
  template:` <main> <header class="brand-name"> <img class="brand-logo" src="/assets/logo.svg" alt="logo"
  aria-hidden="true"> </header> <section class="content"> <app-home></app-home> </section> </main> `,
})

export class AppComponent {
  title = 'House_Rental_App';
}
