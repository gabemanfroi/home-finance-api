import { connectionSource } from 'core/db/typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: () => {
      return connectionSource.initialize();
    },
  },
];
