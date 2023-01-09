import { TestBed } from '@angular/core/testing';

import { AllRestaurantsService } from './all-restaurants.service';

describe('AllRestaurantsService', () => {
  let service: AllRestaurantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllRestaurantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
