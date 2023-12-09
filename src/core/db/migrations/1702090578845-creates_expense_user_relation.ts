import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatesExpenseUserRelation1702090578845
  implements MigrationInterface
{
  name = 'CreatesExpenseUserRelation1702090578845';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "expense" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "expense" ADD CONSTRAINT "FK_06e076479515578ab1933ab4375" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "expense" DROP CONSTRAINT "FK_06e076479515578ab1933ab4375"`,
    );
    await queryRunner.query(`DROP TABLE "expense"`);
  }
}
