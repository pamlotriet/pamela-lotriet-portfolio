import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  translate = inject(TranslateService);
  navIcons = toSignal(this.translate.get('navbar.mediaIcons'));
  routes = toSignal(this.translate.get('navbar.routes'));

  navigate(url: string) {
    window.open(url, '_blank');
  }
}
