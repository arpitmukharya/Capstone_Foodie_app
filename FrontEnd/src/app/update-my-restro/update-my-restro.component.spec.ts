import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyRestroComponent } from './update-my-restro.component';

describe('UpdateMyRestroComponent', () => {
  let component: UpdateMyRestroComponent;
  let fixture: ComponentFixture<UpdateMyRestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMyRestroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMyRestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
