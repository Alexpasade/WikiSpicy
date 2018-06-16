import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionesRestaurantesComponent } from './opiniones-restaurantes.component';

describe('OpinionesRestaurantesComponent', () => {
  let component: OpinionesRestaurantesComponent;
  let fixture: ComponentFixture<OpinionesRestaurantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionesRestaurantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionesRestaurantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
