import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-progres-spinner',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './progres-spinner.component.html',
  styleUrl: './progres-spinner.component.css',
})
export class ProgresSpinnerComponent {}
