import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoalescingOperatorComponent } from './coalescing-operator.component';

describe('CoalescingOperatorComponent', () => {
  let component: CoalescingOperatorComponent;
  let fixture: ComponentFixture<CoalescingOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoalescingOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoalescingOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
