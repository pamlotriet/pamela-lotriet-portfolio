import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RoundProgressBarComponent } from '../../shared/components/round-progress-bar/round-progress-bar.component';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, RoundProgressBarComponent],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  translate = inject(TranslateService);
  skills = toSignal(this.translate.get('skills'));
}
