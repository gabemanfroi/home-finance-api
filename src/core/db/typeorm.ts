import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'home-finance',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/core/db/migrations/*{.ts,.js}'],
  synchronize: true,
  logging: true,
};

export const connectionSource = new DataSource(config as DataSourceOptions);
