import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from 'core/db/typeorm/typeorm.service';
import { UserModule } from 'modules/user';
import { TransactionModule } from 'modules/transaction/transaction.module';

const ENV_PATH_BY_ENV = {
  test: '.env.test',
  development: '.env',
  production: '.env.production',
};

console.log(process.env.NODE_ENV);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmService,
    }),
    UserModule,
    TransactionModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV_PATH_BY_ENV[process.env.NODE_ENV],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
