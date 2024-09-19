import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RoundProgressBarComponent } from '../../shared/components/round-progress-bar/round-progress-bar.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';

@Component({
  selector: 'app-experienc-and-education',
  standalone: true,
  imports: [TranslateModule, RoundProgressBarComponent, TimelineComponent],
  templateUrl: './experience-and-education.component.html',
})
export class ExperienceAndEducationComponent {
  translate = inject(TranslateService);
  experience = toSignal(this.translate.get('experience'));
  education = toSignal(this.translate.get('education'));
}
