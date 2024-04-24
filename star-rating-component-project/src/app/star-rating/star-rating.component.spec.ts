import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 stars as default', () => {
    const stars = fixture.debugElement.queryAll(By.css('.star'));
    expect(stars.length).toBe(5);
  })

  
  it('should have 7 stars if changed to it', () => {
    component.maxRating = 7;
    fixture.detectChanges();
    const stars = fixture.debugElement.queryAll(By.css('.star'));
    expect(stars.length).toBe(7);
  })
});
