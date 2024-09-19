import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text = '';
  @Input() classElements =
    'w-32 h-10 rounded-full bg-primary text-white border-none cursor-pointer';
}
