import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {}
