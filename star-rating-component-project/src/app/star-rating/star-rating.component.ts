import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent  {

  @Input()
  maxRating: number = 5;

  @Input()
  disabled: boolean = false;

  @Input()
  currentRating = 0;

  @Output()
  rated: EventEmitter<number> = new EventEmitter();
}
