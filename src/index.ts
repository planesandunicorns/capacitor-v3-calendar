import { registerPlugin } from '@capacitor/core';

import type { CapacitorCalendarPlugin } from './definitions';

const CapacitorCalendar = registerPlugin<CapacitorCalendarPlugin>(
  'CapacitorCalendar',
  {
    web: () => import('./web').then(m => new m.CapacitorCalendarWeb()),
  },
);

export * from './definitions';
export { CapacitorCalendar };

/*
export * from './definitions';
export * from './web';
*/