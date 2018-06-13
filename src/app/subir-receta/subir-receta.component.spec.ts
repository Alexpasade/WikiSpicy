import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirRecetaComponent } from './subir-receta.component';

describe('SubirRecetaComponent', () => {
  let component: SubirRecetaComponent;
  let fixture: ComponentFixture<SubirRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
