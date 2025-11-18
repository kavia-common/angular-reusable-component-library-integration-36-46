import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * PUBLIC_INTERFACE
 * Root AppComponent that hosts the router outlet.
 * The default route redirects to /dashboard.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: [``]
})
export class AppComponent {}
