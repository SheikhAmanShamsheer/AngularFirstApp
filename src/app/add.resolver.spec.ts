import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { addResolver } from './add.resolver';

describe('addResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => addResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
