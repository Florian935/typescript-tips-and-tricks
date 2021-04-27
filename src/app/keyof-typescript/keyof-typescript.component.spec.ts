import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyofTypescriptComponent } from './keyof-typescript.component';

describe('KeyofTypescriptComponent', () => {
  let component: KeyofTypescriptComponent;
  let fixture: ComponentFixture<KeyofTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyofTypescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyofTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
