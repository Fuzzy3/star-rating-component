import { Component, Injector } from '@angular/core';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NgElementConstructor, createCustomElement } from '@angular/elements';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  rating: number = 1;

  constructor(
    injector: Injector,
  ) {
    const StarRatingElement: NgElementConstructor<StarRatingComponent> = createCustomElement(StarRatingComponent, {injector});
    customElements.define('star-rating', StarRatingElement);
  }

  rated(rating: number) {
    this.rating = rating;
  }
}
