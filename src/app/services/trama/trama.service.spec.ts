import { TestBed } from '@angular/core/testing';

import { TramaService } from './trama.service';

describe('TramaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TramaService = TestBed.get(TramaService);
    expect(service).toBeTruthy();
  });
});
