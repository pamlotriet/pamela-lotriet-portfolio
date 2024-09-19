import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-round-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './round-progress-bar.component.html',
})
export class RoundProgressBarComponent implements OnInit, OnChanges {
  @Input() percent: number = 0;
  dashArray: string = '0, 100';

  constructor() {}

  ngOnInit(): void {
    this.updateDashArray();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['percent']) {
      this.updateDashArray();
    }
  }

  updateDashArray(): void {
    const circumference = 100;
    const offset = ((100 - this.percent) / 100) * circumference;
    this.dashArray = `${circumference - offset}, ${circumference}`;
  }
}
