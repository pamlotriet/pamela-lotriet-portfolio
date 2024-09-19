import { Component, Input, Signal } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './timeline.component.html',
})
export class TimelineComponent {
  @Input() events: any = [];
  @Input() align = '';
}
