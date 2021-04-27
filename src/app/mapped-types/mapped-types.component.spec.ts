import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappedTypesComponent } from './mapped-types.component';

describe('MappedTypesComponent', () => {
  let component: MappedTypesComponent;
  let fixture: ComponentFixture<MappedTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappedTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MappedTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
