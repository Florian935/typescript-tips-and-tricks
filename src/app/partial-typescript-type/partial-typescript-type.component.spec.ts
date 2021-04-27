import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialTypescriptTypeComponent } from './partial-typescript-type.component';

describe('PartialTypescriptTypeComponent', () => {
  let component: PartialTypescriptTypeComponent;
  let fixture: ComponentFixture<PartialTypescriptTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartialTypescriptTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialTypescriptTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
