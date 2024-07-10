import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslateModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
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
