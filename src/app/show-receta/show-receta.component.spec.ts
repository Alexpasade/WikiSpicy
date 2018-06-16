import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRecetaComponent } from './show-receta.component';

describe('ShowRecetaComponent', () => {
  let component: ShowRecetaComponent;
  let fixture: ComponentFixture<ShowRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
