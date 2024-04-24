import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface StarModel {
  rating: number;
}

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent implements OnInit {

  stars: StarModel[] = [];

  @Input()
  maxRating: number = 5;

  @Input()
  disabled: boolean = false;

  @Input()
  currentRating = 0;

  @Output()
  rated: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    for(let i = 0; i < this.maxRating; i++) {
      this.stars.push( {rating: i+1} )
    }
  }

  //Bad performance - fix this later so its not called from template
  getImage(rating: number) {
    const isBold = rating <= this.currentRating;
    const imgName = isBold ? 'star-bold.svg' : 'star.svg';
    return imgName;
  }
}
