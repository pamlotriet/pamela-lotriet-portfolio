import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Paragraph, Project } from '../models/extra-content.models';

@Injectable({
  providedIn: 'root',
})
export class ExtraContent {
  constructor(private translate: TranslateService) {}

  getProjects(): Observable<Project[]> {
    return this.translate
      .get('projects.projectList')
      .pipe(map((projects: Project[]) => projects));
  }

  getAboutParagraphs(): Observable<Paragraph[]> {
    return this.translate
      .get('about.paragraphsList')
      .pipe(map((paragraphs: Paragraph[]) => paragraphs));
  }
}
