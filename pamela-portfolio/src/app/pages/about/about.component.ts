import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { Observable } from 'rxjs';
import { Paragraph } from '../../shared/models/extra-content.models';
import { ExtraContent } from '../../shared/services/extra-content.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    TranslateModule,
    RouterModule,
    NavbarComponent,
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  show = false;
  seconds = 2;

  paragraphs$: Observable<Paragraph[]> | undefined;
  constructor(private extraContentService: ExtraContent) {}

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
    });

    this.paragraphs$ = this.extraContentService.getAboutParagraphs();

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
