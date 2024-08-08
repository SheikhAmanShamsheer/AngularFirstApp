import { ResolveFn } from '@angular/router';

export const addResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
