import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslateModule,
    NavbarComponent,
    ButtonComponent,
    TextareaComponent,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
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
