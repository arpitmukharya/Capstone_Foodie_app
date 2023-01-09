import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRestroComponent } from './favorite-restro.component';

describe('FavoriteRestroComponent', () => {
  let component: FavoriteRestroComponent;
  let fixture: ComponentFixture<FavoriteRestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteRestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteRestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
