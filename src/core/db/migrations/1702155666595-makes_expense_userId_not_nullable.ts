import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1702155666595 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE "expense"
        ALTER COLUMN "userId" SET NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE "expense"
        ALTER COLUMN "userId" DROP NOT NULL`);
  }
}
