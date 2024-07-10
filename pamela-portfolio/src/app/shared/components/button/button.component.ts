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
  @Input() link = '';
  @Input() classElements =
    'w-64 h-20 rounded-20px bg-primary text-white shadow-custom hover:shadow-custom-hover focus:shadow-custom-focus text-3xl mt-8 mb-8 border-none text-bangers cursor-pointer';
}
