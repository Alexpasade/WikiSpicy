import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantesFavoritosComponent } from './restaurantes-favoritos.component';

describe('RestaurantesFavoritosComponent', () => {
  let component: RestaurantesFavoritosComponent;
  let fixture: ComponentFixture<RestaurantesFavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantesFavoritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantesFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
