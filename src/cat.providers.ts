import { Cat } from './cat.entity';

export const catProviders = [
  {
    provide: 'CAT_REPOSITORY',
    useValue: Cat,
  },
];
