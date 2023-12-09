import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const config = {
  type: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'password',
  database: 'home-finance',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/src/core/db/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('database', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
