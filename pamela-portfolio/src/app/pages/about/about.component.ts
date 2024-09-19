import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ExperienceAndEducationComponent } from '../experience-and-education/experience-and-education.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, ExperienceAndEducationComponent, SkillsComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
