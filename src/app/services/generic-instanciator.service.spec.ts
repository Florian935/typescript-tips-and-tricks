import { TestBed } from '@angular/core/testing';

import { GenericInstanciatorService } from './generic-instanciator.service';

describe('GenericInstanciatorService', () => {
  let service: GenericInstanciatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericInstanciatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
