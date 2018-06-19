import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTiendaComponent } from './show-tienda.component';

describe('ShowTiendaComponent', () => {
  let component: ShowTiendaComponent;
  let fixture: ComponentFixture<ShowTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
