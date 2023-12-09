import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'test',
  password: 'test',
  database: 'home-finance-test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/core/db/migrations/*{.ts,.js}'],
  synchronize: true,
  logging: false,
};

export const connectionSource = new DataSource(config as DataSourceOptions);
