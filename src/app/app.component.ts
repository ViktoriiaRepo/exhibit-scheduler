import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'exhibit-scheduler';
}
// import { Router, Event, NavigationEnd } from '@angular/router';

// import { IStaticMethods } from 'preline/preline';

// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, SidebarComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent implements OnInit {
//   title = 'exhibit-scheduler';

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.events.subscribe((event: Event) => {
//       if (event instanceof NavigationEnd) {
//         setTimeout(() => {
//           window.HSStaticMethods.autoInit();
//         }, 100);
//       }
//     });
//   }
// }
