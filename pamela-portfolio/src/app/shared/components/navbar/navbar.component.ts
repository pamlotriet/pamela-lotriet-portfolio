import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
