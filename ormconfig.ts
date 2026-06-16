import * as dotenv from 'dotenv';
import { join } from 'path';
import {
  DataSource,
  DataSourceOptions,
} from 'typeorm';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DB_URL,
  ssl: true,
  synchronize: false,
  logging: false,
  migrationsTableName: 'migrations',
  entities: [join(__dirname, 'src', 'entities', '*.entity.{ts,js}')],
  migrations: [join(__dirname, 'src', 'migrations', '*{.ts,.js}')],
};

export const dataSourceConnection = new DataSource(dataSourceOptions);
