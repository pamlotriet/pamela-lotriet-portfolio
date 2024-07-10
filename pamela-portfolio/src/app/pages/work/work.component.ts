import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Observable } from 'rxjs';
import { Project } from '../../shared/models/extra-content.models';
import { ExtraContent } from '../../shared/services/extra-content.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TranslateModule],
  templateUrl: './work.component.html',
})
export class WorkComponent implements OnInit {
  projects$: Observable<Project[]> | undefined;
  constructor(private extraContentService: ExtraContent) {}
  show = false;
  seconds = 2;

  showContent() {
    this.show = true;
  }

  playAudio() {
    const audio = new Audio('assets/Spaceship.wav');
    audio.play().catch((error) => {
      console.error('Audio playback failed:', error);
    });
  }

  ngOnInit(): void {
    // Preload audio file
    this.preloadAudio('assets/Spaceship.wav').then(() => {
      this.playAudio();
      this.projects$ = this.extraContentService.getProjects();
    });

    // Show content after specified delay
    setTimeout(() => {
      this.showContent();
    }, this.seconds * 1000);
  }

  preloadAudio(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const audio = new Audio(src);
      audio.addEventListener('canplaythrough', () => resolve(), false);
      audio.addEventListener('error', (e) => reject(e), false);
      audio.load();
    });
  }
}
