import { Component } from '@angular/core';
import { HealthDashboardDemoComponent } from '../../projects/ui-health/src/lib/demo/health-dashboard-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HealthDashboardDemoComponent],
  template: `<ui-health-dashboard-demo />`,
  styles: [``]
})
export class AppComponent {}
