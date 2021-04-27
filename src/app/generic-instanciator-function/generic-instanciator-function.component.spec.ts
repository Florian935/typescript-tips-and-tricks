import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericInstanciatorFunctionComponent } from './generic-instanciator-function.component';

describe('GenericInstanciatorFunctionComponent', () => {
  let component: GenericInstanciatorFunctionComponent;
  let fixture: ComponentFixture<GenericInstanciatorFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericInstanciatorFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericInstanciatorFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
