import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1702155204071 implements MigrationInterface {
  name = 'InitialMigration1702155204071';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "expense_category"
                             (
                                 "id"    SERIAL            NOT NULL,
                                 "title" character varying NOT NULL,
                                 CONSTRAINT "PK_478b68a9314d8787fb3763a2298" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "expense"
                             (
                                 "id"     SERIAL            NOT NULL,
                                 "title"  character varying NOT NULL,
                                 "amount" integer           NOT NULL,
                                 "date"   TIMESTAMP         NOT NULL,
                                 "userId" integer,
                                 CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`CREATE TABLE "user"
                             (
                                 "id"        SERIAL            NOT NULL,
                                 "createdAt" TIMESTAMP         NOT NULL DEFAULT now(),
                                 "updatedAt" TIMESTAMP         NOT NULL DEFAULT now(),
                                 "firstName" character varying NOT NULL,
                                 "lastName"  character varying NOT NULL,
                                 "email"     character varying NOT NULL,
                                 "password"  character varying NOT NULL,
                                 CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
                             )`);
    await queryRunner.query(`ALTER TABLE "expense"
        ADD CONSTRAINT "FK_06e076479515578ab1933ab4375" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "expense"
        DROP CONSTRAINT "FK_06e076479515578ab1933ab4375"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "expense"`);
    await queryRunner.query(`DROP TABLE "expense_category"`);
  }
}
