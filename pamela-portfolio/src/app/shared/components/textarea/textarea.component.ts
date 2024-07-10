import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.component.html',
})
export class TextareaComponent {
  formControl = new FormControl('');
  @Input() placeholder!: string;
  @Input() classElements = '';
}
