import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../../../projects/ui-health/src/lib/components/header/header.component';
import { FiltersToolbarComponent } from '../../../../projects/ui-health/src/lib/components/filters-toolbar/filters-toolbar.component';
import { LayoutGridComponent } from '../../../../projects/ui-health/src/lib/components/layout-grid/layout-grid.component';
import { StatCardComponent } from '../../../../projects/ui-health/src/lib/components/stat-card/stat-card.component';
import { ChartCardComponent } from '../../../../projects/ui-health/src/lib/components/chart-card/chart-card.component';
import { ActivityItemComponent } from '../../../../projects/ui-health/src/lib/components/activity-item/activity-item.component';
import { ProgressRingComponent } from '../../../../projects/ui-health/src/lib/components/progress-ring/progress-ring.component';
import { ProgressBarComponent } from '../../../../projects/ui-health/src/lib/components/progress-bar/progress-bar.component';

/**
 * PUBLIC_INTERFACE
 * DashboardPageComponent composes the @custom/ui-health components into a sample
 * Health Dashboard/Overview screen using global Tailwind tokens and styles.
 * It demonstrates header, filters, stat cards grid, chart placeholders,
 * activity list, and progress components with mock data.
 */
@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FiltersToolbarComponent,
    LayoutGridComponent,
    StatCardComponent,
    ChartCardComponent,
    ActivityItemComponent,
    ProgressRingComponent,
    ProgressBarComponent
  ],
  template: `
    <div class="min-h-dvh bg-background p-4 md:p-6 space-y-4">
      <ui-header
        [title]="'Health Dashboard'"
        [dateRange]="dateRange"
        (refresh)="onRefresh()"
      >
        <div end-actions class="hidden sm:block">
          <button class="btn-primary">Export</button>
        </div>
      </ui-header>

      <ui-filters-toolbar [label]="'Filters'">
        <div start class="flex gap-2">
          <button class="input" (click)="setRange('today')" [attr.aria-pressed]="range === 'today'">Today</button>
          <button class="input" (click)="setRange('7d')" [attr.aria-pressed]="range === '7d'">7D</button>
          <button class="btn-primary" (click)="setRange('30d')" [attr.aria-pressed]="range === '30d'">30D</button>
        </div>
        <div end class="w-44 sm:w-64">
          <input placeholder="Search…" class="input w-full" />
        </div>
      </ui-filters-toolbar>

      <ui-layout-grid cols="4">
        <ui-stat-card
          *ngFor="let s of stats"
          [label]="s.label"
          [value]="s.value"
          [trend]="s.trend"
          [description]="s.description"
        ></ui-stat-card>
      </ui-layout-grid>

      <ui-layout-grid cols="3">
        <ui-chart-card title="Vitals Trend">
          <!-- Placeholder chart content using ng-content (replace with real chart later) -->
          <div class="h-56 bg-gradient-to-b from-blue-50 to-white rounded-md border border-gray-200 flex items-center justify-center text-gray-400">
            Chart placeholder
          </div>
        </ui-chart-card>

        <ui-chart-card title="Activity Focus">
          <div class="flex flex-col md:flex-row items-center md:items-stretch gap-6">
            <div class="flex items-center justify-center md:justify-start">
              <ui-progress-ring [progress]="focus.progress"></ui-progress-ring>
            </div>
            <div class="flex-1 w-full space-y-2">
              <ui-progress-bar
                *ngFor="let p of focus.bars"
                [label]="p.label"
                [value]="p.value"
              ></ui-progress-bar>
            </div>
          </div>
        </ui-chart-card>

        <section class="card-surface p-4 border border-gray-100/70">
          <h3 class="ui-section-title mb-2">Recent Activity</h3>
          <ui-activity-item
            *ngFor="let a of activities"
            [title]="a.title"
            [subtitle]="a.subtitle"
          >
            <span icon>{{ a.icon }}</span>
            <span meta>{{ a.time }}</span>
          </ui-activity-item>
        </section>
      </ui-layout-grid>
    </div>
  `
})
export class DashboardPageComponent {
  /** PUBLIC_INTERFACE
   * Currently selected date range key.
   */
  range: 'today' | '7d' | '30d' = '30d';

  /** PUBLIC_INTERFACE
   * Mock stats shown in the stat cards grid.
   */
  stats = [
    { label: 'Heart Rate', value: '72 BPM', trend: 3, description: 'Resting average' },
    { label: 'Steps', value: '8,450', trend: -2, description: 'Daily total' },
    { label: 'Sleep', value: '7.2 hrs', trend: 5, description: 'Last night' },
    { label: 'Calories', value: '1,950 kcal', trend: 1, description: 'Consumed' },
  ];

  /** PUBLIC_INTERFACE
   * Mock focus/progress distribution across activity types.
   */
  focus = {
    progress: 64,
    bars: [
      { label: 'Cardio', value: 64 },
      { label: 'Strength', value: 42 },
      { label: 'Mobility', value: 78 },
    ]
  };

  /** PUBLIC_INTERFACE
   * Recent activity list items.
   */
  activities = [
    { title: 'Morning Run', subtitle: '5.2 km • 28 min', time: '07:30', icon: '🏃' },
    { title: 'Meditation', subtitle: '15 min', time: '09:15', icon: '🧘' },
    { title: 'Lunch', subtitle: '620 kcal', time: '12:40', icon: '🥗' },
  ];

  /** PUBLIC_INTERFACE
   * Date range text for header.
   */
  get dateRange(): string {
    switch (this.range) {
      case 'today': return 'Today';
      case '7d': return 'Last 7 Days';
      default: return 'Last 30 Days';
    }
  }

  /** PUBLIC_INTERFACE
   * Set active range filter.
   */
  setRange(next: 'today' | '7d' | '30d') {
    this.range = next;
  }

  /** PUBLIC_INTERFACE
   * Handle header refresh click.
   */
  onRefresh() {
    // Placeholder: hook up data reload later
    console.log('Refresh requested for range:', this.range);
  }
}
